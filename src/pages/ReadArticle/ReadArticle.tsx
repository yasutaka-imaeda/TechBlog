import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Header from "../../component/Header/Header";
import styles from "./ReadArticle.module.scss";
import axios from "axios";
import { selectAfterTemp, selectPost } from "../../app/taskSlice";

const CreateArticle: React.FC = () => {
  const data = useAppSelector(selectPost);
  const dataList = data.map((item) => {
    const id = item.id;
    const title = item.title;
    const like = item.like;
    const createAt = item.createAt;
    return (
      <div className={styles.itemWrapper} key={id}>
        <div className={styles.postTitle}>{title}</div>
        <div className={styles.createAt}>投稿日時：{createAt}</div>
        <div className={styles.like}>いいね：{like}</div>
      </div>
    );
  });
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
        <div>{dataList}</div>
      </div>
    </div>
  );
};

export default CreateArticle;
