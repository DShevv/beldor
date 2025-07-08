import { SvgEye, SvgFlagBy } from "@/assets/icons/svgs";
import styles from "./Header.module.scss";
import Link from "next/link";
import clsx from "clsx";
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import HeaderBottom from "./HeaderBottom/HeaderBottom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={styles.wrapper}>
          <div className={styles.country}>
            <SvgFlagBy />
            <span className="body-6">Республика Беларусь</span>
          </div>
          <div className={styles.buttons}>
            <div className={clsx(styles.language, "body-5")}>
              <Link
                href="/"
                className={clsx(styles.languageLink, styles.active)}
              >
                RU
              </Link>
              <Link href="/" className={clsx(styles.languageLink)}>
                BY
              </Link>
            </div>
            <Link href="/" className={styles.version}>
              <SvgEye />
              <span className="body-5">Версия для слабовидящих</span>
            </Link>
          </div>
        </div>
      </div>
      <HeaderInfo />

      <HeaderBottom />
    </header>
  );
};

export default Header;
