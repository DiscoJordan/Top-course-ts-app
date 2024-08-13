import React from "react";
import { HeaderProps } from "./Header.props";
// import styles from "./Sidebar.module.css";
// import cn from "classnames";

function P({ ...props }: HeaderProps): JSX.Element {
  return (
    <header {...props}>
      Header
    </header>
  );
}

export default P;
