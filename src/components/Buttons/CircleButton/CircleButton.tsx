import clsx from "clsx";
import styles from "./CircleButton.module.scss";
import Link from "next/link";

type CircleButtonProps =
  | {
      onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
      disabled?: boolean;
      className?: string;
      type?: "button" | "submit";
      href?: never;
      children?: React.ReactNode;
      otherProps?: React.HTMLAttributes<HTMLButtonElement>;
    }
  | {
      onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
      disabled?: boolean;
      className?: string;
      type?: "link";
      href: string;
      children?: React.ReactNode;
      otherProps?: React.HTMLAttributes<HTMLAnchorElement>;
    };

const CircleButton = (props: CircleButtonProps) => {
  if (props.type === "link" && props.href) {
    return (
      <Link
        className={clsx("t-button", styles.button, props.className)}
        href={props.href}
        onClick={props.onClick}
        {...props.otherProps}
      >
        {props.children}
      </Link>
    );
  }

  const buttonProps = props.otherProps as Extract<
    CircleButtonProps,
    {
      type?: "button" | "submit";
    }
  >;

  return (
    <button
      className={clsx("t-button", styles.button, props.className)}
      onClick={props.onClick as React.MouseEventHandler<HTMLButtonElement>}
      type={props.type !== "link" ? props.type || "button" : "button"}
      disabled={props.disabled}
      {...buttonProps}
    >
      {props.children}
    </button>
  );
};

export default CircleButton;
