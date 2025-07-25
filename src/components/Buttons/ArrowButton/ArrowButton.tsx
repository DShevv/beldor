import clsx from "clsx";
import styles from "./ArrowButton.module.scss";
import Link from "next/link";
import { SvgArrow } from "@/assets/icons/svgs";

type ArrowButtonProps =
  | {
      onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
      disabled?: boolean;
      className?: string;
      type?: "button" | "submit";
      href?: never;
      variant?: "secondary";
      name?: string;
      otherProps?: React.HTMLAttributes<HTMLButtonElement>;
    }
  | {
      onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
      disabled?: boolean;
      className?: string;
      type?: "link";
      href: string;
      variant?: "secondary";
      name?: never;
      otherProps?: React.HTMLAttributes<HTMLAnchorElement>;
    };

const ArrowButton = (props: ArrowButtonProps) => {
  if (props.type === "link" && props.href) {
    return (
      <Link
        className={clsx("t-button", styles.button, props.className, {
          [styles.disabled]: props.disabled,
          [styles.secondary]: props.variant,
        })}
        href={props.href}
        onClick={props.onClick}
        {...props.otherProps}
      >
        <SvgArrow />
      </Link>
    );
  }

  const buttonProps = props.otherProps as Extract<
    ArrowButtonProps,
    {
      type?: "button" | "submit";
    }
  >;

  return (
    <button
      className={clsx("t-button", styles.button, props.className, {
        [styles.secondary]: props.variant,
      })}
      onClick={props.onClick as React.MouseEventHandler<HTMLButtonElement>}
      type={props.type !== "link" ? props.type || "button" : "button"}
      disabled={props.disabled}
      name={props.name}
      {...buttonProps}
    >
      <SvgArrow />
    </button>
  );
};

export default ArrowButton;
