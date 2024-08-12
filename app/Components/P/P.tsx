import React from "react";
import { PProps } from "./P.props";
import styles from "./P.module.css";
import cn from "classnames";

function P({ size = "m", children, className, ...props }: PProps): JSX.Element {
  return (
    <p
      className={cn(styles.button, className, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.l]: size === "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
}

export default P;
