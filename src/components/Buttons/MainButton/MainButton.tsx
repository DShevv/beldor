import clsx from "clsx";
import styles from "./MainButton.module.scss";
import Link from "next/link";

type MainButtonProps =
  | {
      onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
      disabled?: boolean;
      children: React.ReactNode;
      className?: string;
      type?: "button" | "submit";
      href?: never;
      variant?: "primary" | "secondary" | "dark" | "transparent";
    }
  | {
      onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
      disabled?: boolean;
      children: React.ReactNode;
      className?: string;
      type?: "link";
      href: string;
      variant?: "primary" | "secondary" | "dark" | "transparent";
    };

const MainButton = ({
  onClick,
  disabled,
  children,
  className,
  type = "button",
  href,
  variant = "primary",
}: MainButtonProps) => {
  if (type === "link" && href) {
    return (
      <Link
        className={clsx(styles.button, className, {
          ["t-button"]: variant !== "secondary" && variant !== "dark",
          ["body-4"]: variant === "secondary",
          ["body-2"]: variant === "dark",
          [styles.disabled]: disabled,
          [styles.secondary]: variant === "secondary",
          [styles.dark]: variant === "dark",
          [styles.transparent]: variant === "transparent",
        })}
        href={href}
        onClick={onClick}
      >
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button
      className={clsx(styles.button, className, {
        ["t-button"]: variant !== "secondary" && variant !== "dark",
        ["body-4"]: variant === "secondary",
        ["body-2"]: variant === "dark",
        [styles.secondary]: variant === "secondary",
        [styles.dark]: variant === "dark",
        [styles.transparent]: variant === "transparent",
      })}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      type={type !== "link" ? type : undefined}
      disabled={disabled}
    >
      <span>{children}</span>
    </button>
  );
};

export default MainButton;
