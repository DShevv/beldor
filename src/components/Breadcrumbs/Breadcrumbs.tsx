import Link from "next/link";
import styles from "./Breadcrumbs.module.scss";
import clsx from "clsx";
import { SvgArrow } from "@/assets/icons/svgs";

interface BreadcrumbsProps {
  items: { title: string; href: string }[];
  className?: string;
}

const Breadcrumbs = ({ items, className }: BreadcrumbsProps) => {
  return (
    <div
      className={clsx(styles.container, className)}
      itemScope
      itemType="https://schema.org/BreadcrumbList"
    >
      {items.map((item, index) => (
        <div
          key={`${index}${item.title}`}
          className="h6"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          {items.length > index + 1 ? (
            <Link
              key={`${index}${item.title}`}
              href={item.href}
              className={clsx("h6", styles.link)}
              itemProp="item"
            >
              {item.title}
            </Link>
          ) : (
            <div className={clsx("h6", styles.link)} itemProp="item">
              {item.title}
            </div>
          )}
          {index < items.length - 1 && <SvgArrow />}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
