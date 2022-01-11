import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./Header.module.scss";
import axios from "axios";
import { Path } from "../../Routes ";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Header: React.FC = () => {
  return (
    <div className={styles.root}>
      <div>ダッシュボード</div>
      <Button component={Link} to={Path.home}>
        ホームへページ遷移
      </Button>
      <Button component={Link} to={Path.createArticle}>
        記事編集ページ遷移
      </Button>
      <Button component={Link} to={Path.readArticle}>
        記事見るページ遷移
      </Button>
    </div>
  );
};

export default Header;
