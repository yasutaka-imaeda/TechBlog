import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Header from "../../component/Header/Header";
import styles from "./ReadArticle.module.scss";
import axios from "axios";
import { selectAfterTemp, selectPost } from "../../app/taskSlice";

const CreateArticle: React.FC = () => {
  const data = useAppSelector(selectPost);
  console.log(data);
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
        <div>{data[0].title}</div>
        <div>第一記事</div>
      </div>
    </div>
  );
};

export default CreateArticle;
