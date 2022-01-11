import React from "react";
import Header from "../../component/Header/Header";
import styles from "./ReadArticle.module.scss";

const CreateArticle: React.FC = () => {
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
