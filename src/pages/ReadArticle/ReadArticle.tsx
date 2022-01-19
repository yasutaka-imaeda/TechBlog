import React from "react";
import Header from "../../component/Header/Header";
import styles from "./ReadArticle.module.scss";
import axios from "axios";

const CreateArticle: React.FC = () => {
  const test = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/posts/1`);
      console.log(response);
    } catch {
      window.alert("取得失敗");
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
        <div>記事一覧</div>
      </div>
    </div>
  );
};

export default CreateArticle;
