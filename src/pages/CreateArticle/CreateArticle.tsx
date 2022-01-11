import React from "react";
import Header from "../../component/Header/Header";
import styles from "./CreateArticle.module.scss";

const CreateArticle: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
        <div>記事編集</div>
      </div>
    </div>
  );
};

export default CreateArticle;
