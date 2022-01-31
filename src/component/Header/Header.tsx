import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./Header.module.scss";
import axios from "axios";
import { Path } from "../../Routes ";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { registerPost } from "../../app/taskSlice";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const getList = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/posts/`);
      const data: any = response.data;
      dispatch(registerPost(data));
    } catch {
      window.alert("取得失敗");
    }
  };
  return (
    <div className={styles.root}>
      <div>ダッシュボード</div>
      <Button component={Link} to={Path.home} onClick={getList}>
        ホームへページ遷移
      </Button>
      <Button component={Link} to={Path.createArticle} onClick={getList}>
        記事作成ページ遷移
      </Button>
      <Button component={Link} to={Path.readArticle} onClick={getList}>
        記事一覧ページ遷移
      </Button>
    </div>
  );
};

export default Header;
