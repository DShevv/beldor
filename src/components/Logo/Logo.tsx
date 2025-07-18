import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import styles from "./Logo.module.scss";
import clsx from "clsx";

const Logo = ({
  isLink = true,
  text,
  className,
}: {
  isLink?: boolean;
  text?: string;
  className?: string;
}) => {
  return (
    <>
      {isLink ? (
        <Link className={clsx(styles.logo, className)} href="/">
          <Image src={logo} alt="logo" width={291} height={59} />
          {text && <span className={clsx(styles.text, "body-7")}>{text}</span>}
        </Link>
      ) : (
        <div className={clsx(styles.logo, className)}>
          <Image src={logo} alt="logo" width={291} height={59} />
          {text && <span className={clsx(styles.text, "body-7")}>{text}</span>}
        </div>
      )}
    </>
  );
};

export default Logo;
