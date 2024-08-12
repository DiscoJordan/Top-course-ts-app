import React from "react";
import { FooterProps } from "./Footer.props";
// import styles from "./Footer.module.css";
// import cn from "classnames";

function P({ ...props }: FooterProps): JSX.Element {
  return (
    <div {...props}>
      Footer
    </div>
  );
}

export default P;
