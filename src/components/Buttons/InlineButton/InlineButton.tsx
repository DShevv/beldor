import clsx from "clsx";
import styles from "./InlineButton.module.scss";
import Link from "next/link";
import { SvgArrow } from "@/assets/icons/svgs";

type InlineButtonProps =
  | {
      onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
      disabled?: boolean;
      children: React.ReactNode;
      className?: string;
      type?: "button" | "submit";
      href?: never;
      backIcon?: boolean;
      target?: never;
    }
  | {
      onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
      disabled?: boolean;
      children: React.ReactNode;
      className?: string;
      type?: "link";
      href: string;
      backIcon?: boolean;
      target?: "_blank" | "_self" | "_parent" | "_top";
    };

const InlineButton = ({
  onClick,
  disabled,
  children,
  className,
  type = "button",
  href,
  backIcon = false,
  target,
}: InlineButtonProps) => {
  if (type === "link" && href) {
    return (
      <Link
        className={clsx("t-button", styles.button, className, {
          [styles.disabled]: disabled,
          [styles.backIcon]: backIcon,
        })}
        href={href}
        onClick={onClick}
        target={target}
      >
        {backIcon && <SvgArrow />}
        {children}
      </Link>
    );
  }

  return (
    <button
      className={clsx("t-button", styles.button, className, {
        [styles.backIcon]: backIcon,
      })}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      type={type !== "link" ? type : undefined}
      disabled={disabled}
    >
      {backIcon && <SvgArrow />}
      {children}
    </button>
  );
};

export default InlineButton;
