import React from "react";
import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";
import {format} from 'date-fns'

function P({className, ...props }: FooterProps): JSX.Element {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>Otmena Courses {format(new Date(), 'yyyy')} All Rights reserved</div>
      <a href="#" target="_blank">Terms of use</a>
      <a href="#" target="_blank">Privacy policy</a>
      
    </footer>
  );
}

export default P;
