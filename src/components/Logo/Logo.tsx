import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import styles from "./Logo.module.scss";
import clsx from "clsx";
import logoWhite from "@/assets/images/logo-white.png";

const Logo = ({
  isLink = true,
  text,
  className,
  image,
}: {
  isLink?: boolean;
  text?: string;
  className?: string;
  image?: StaticImageData | string;
}) => {
  return (
    <>
      {isLink ? (
        <Link className={clsx(styles.logo, className)} href="/">
          <Image
            src={image || logo}
            alt="logo"
            width={291}
            height={59}
            className={styles.logoImage}
          />
          <Image
            src={logoWhite}
            alt="logo"
            width={291}
            height={59}
            className={styles.logoWhite}
          />
          {text && <span className={clsx(styles.text, "body-7")}>{text}</span>}
        </Link>
      ) : (
        <div className={clsx(styles.logo, className)}>
          <Image
            src={image || logo}
            alt="logo"
            width={291}
            height={59}
            className={styles.logoImage}
          />
          <Image
            src={logoWhite}
            alt="logo"
            width={291}
            height={59}
            className={styles.logoWhite}
          />
          {text && <span className={clsx(styles.text, "body-7")}>{text}</span>}
        </div>
      )}
    </>
  );
};

export default Logo;
