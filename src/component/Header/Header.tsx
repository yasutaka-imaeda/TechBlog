import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./Header.module.scss";
import axios from "axios";

const Header: React.FC = () => {
  return <div className={styles.root}>ダッシュボード</div>;
};

export default Header;
