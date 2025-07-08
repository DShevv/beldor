"use client";
import React, { useState, useEffect, useCallback } from "react";
import clsx from "clsx";
import Link from "next/link";
import styles from "./Search.module.scss";
import { SvgSearch } from "@/assets/icons/svgs";
import { searchData } from "@/data/dumpy-data";
import Image, { StaticImageData } from "next/image";

interface SearchResult {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  href: string;
}

interface SearchProps {
  placeholder?: string;
  className?: string;
  maxResults?: number;
  onResultClick?: (result: SearchResult) => void;
  ref?: React.RefObject<HTMLDivElement> | null;
}

const Search = ({
  placeholder = "Поиск по сайту",
  className,
  maxResults = 5,
  onResultClick,
  ref,
}: SearchProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchFunction = useCallback(
    (searchQuery: string): SearchResult[] => {
      if (!searchQuery.trim()) {
        return [];
      }

      const lowercaseQuery = searchQuery.toLowerCase();

      return searchData
        .filter(
          (item) =>
            item.title.toLowerCase().includes(lowercaseQuery) ||
            item.description.toLowerCase().includes(lowercaseQuery)
        )
        .slice(0, maxResults);
    },
    [maxResults]
  );

  useEffect(() => {
    if (query.trim()) {
      setIsLoading(true);

      // Имитация асинхронного поиска
      const timeout = setTimeout(() => {
        const searchResults = searchFunction(query);
        setResults(searchResults);
        setIsLoading(false);
      }, 300);

      return () => clearTimeout(timeout);
    } else {
      setResults([]);
      setIsLoading(false);
    }
  }, [query, searchFunction]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleInputFocus = () => {
    // Фокус на поле ввода
  };

  const handleInputBlur = () => {
    // Задержка для клика по результату
    setTimeout(() => {
      // Блюр поля ввода
    }, 200);
  };

  const handleResultClick = (result: SearchResult) => {
    setQuery("");
    onResultClick?.(result);
  };

  return (
    <div className={clsx(styles.search, className)} ref={ref}>
      <div className={styles.inputContainer}>
        <SvgSearch className={styles.searchIcon} />
        <input
          name="search"
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          className={clsx("t-placeholder", styles.input)}
        />
      </div>

      {results.length > 0 && (
        <div className={styles.resultsContainer}>
          <div className={styles.scrollWrapper}>
            {isLoading ? (
              <div className={styles.loading}>
                <div className={styles.spinner}></div>
                <span className="body-5">Поиск...</span>
              </div>
            ) : results.length > 0 ? (
              <div className={styles.results}>
                {results.map((result) => (
                  <Link
                    key={result.id}
                    href={result.href}
                    className={styles.resultItem}
                    onClick={() => handleResultClick(result)}
                  >
                    <div className={styles.resultImage}>
                      <Image
                        src={result.image}
                        alt={result.title}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/BG.png";
                        }}
                        width={56}
                        height={56}
                      />
                    </div>
                    <div className={styles.resultContent}>
                      <h3 className={clsx("body-4", styles.resultTitle)}>
                        {result.title}
                      </h3>
                      <p className={clsx("body-7", styles.resultDescription)}>
                        {result.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : query.trim() ? (
              <div className={styles.noResults}>
                <span className="body-4">Результаты не найдены</span>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
