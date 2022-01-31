import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Header from "../../component/Header/Header";
import styles from "./Article.module.scss";
import axios from "axios";
import { Path } from "../../Routes ";
import { Link } from "react-router-dom";
import {
  selectSelectPost,
  registerSelectPost,
  registerPost,
} from "../../app/taskSlice";
import { marked } from "marked";
import DOMPurify from "dompurify";

const Article: React.FC = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(0);
  }, []);
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectSelectPost);
  const home = async () => {
    const response = await axios.get(`http://localhost:3001/posts/`);
    const newData: any = response.data;
    dispatch(registerPost(newData));
  };
  const deletePost = async () => {
    await axios.delete(`http://localhost:3001/posts/${data.id}`);
    const response = await axios.get(`http://localhost:3001/posts/`);
    const newData: any = response.data;
    dispatch(registerPost(newData));
  };
  const like = async () => {
    if (count === 1) {
      window.alert("いいねは１回だけですよ！");
      return;
    }
    const body = {
      title: data.title,
      bodyText: data.bodyText,
      bodyTextHtml: data.bodyTextHtml,
      createAt: data.createAt,
      like: data.like + 1,
    };
    setCount(1);
    dispatch(registerSelectPost(body));
    await axios.put(`http://localhost:3001/posts/${data.id}`, body);
  };
  return (
    <div className={styles.root}>
      <Link to={Path.home} onClick={home}>
        ホームボタン
      </Link>
      <div className={styles.container}>
        <h1 className={styles.title}>{data.title}</h1>
        <div className={styles.likeWrapper}>
          <div className={styles.likebtn} onClick={like}>
            いいね
          </div>
          <div className={styles.likeCount}>{data.like}</div>
        </div>
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
