"use client";
import { navigation } from "@/data/dumpy-data";
import styles from "./HeaderBottom.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SvgArrow } from "@/assets/icons/svgs";
import Search from "@/components/Search";

const HeaderBottom = () => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ul className={clsx(styles.menu, "body-4")}>
          {navigation.map((item) => (
            <li key={item.id}>
              <div
                className={clsx(styles.menuItem, {
                  [styles.active]: pathname === item.href,
                })}
              >
                <Link href={item.href} className={"h5"}>
                  {item.title} {item.children && <SvgArrow />}
                </Link>
                {item.children && (
                  <ul className={styles.submenu}>
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <Link
                          href={child.href}
                          className={clsx(styles.submenuItem, "body-7")}
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
        <Search />
      </div>
    </div>
  );
};

export default HeaderBottom;
