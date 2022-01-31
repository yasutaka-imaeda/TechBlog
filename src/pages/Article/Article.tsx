import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Header from "../../component/Header/Header";
import styles from "./Article.module.scss";
import axios from "axios";
import { registerPost } from "../../app/taskSlice";
import { Path } from "../../Routes ";
import { Link } from "react-router-dom";
import { selectSelectPost } from "../../app/taskSlice";
import { marked } from "marked";
import DOMPurify from "dompurify";

const Article: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectSelectPost);
  const deletePost = async () => {
    await axios.delete(`http://localhost:3001/posts/${data.id}`);
    const response = await axios.get(`http://localhost:3001/posts/`);
    const newData: any = response.data;
    dispatch(registerPost(newData));
  };
  return (
    <div className={styles.root}>
      <Link to={Path.home}>ホームボタン</Link>
      <div className={styles.container}>
        <h1 className={styles.title}>{data.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.bodyTextHtml),
          }}
        ></div>
        <div className={styles.btnWrapper}>
          <div className={styles.btn} onClick={deletePost}>
            <Link to={Path.readArticle}>削除する</Link>
          </div>
          <div className={styles.btn}>
            <Link to={Path.directArticle}>編集する</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
