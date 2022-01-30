import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Header from "../../component/Header/Header";
import styles from "./ReadArticle.module.scss";
import axios from "axios";
import { selectPost } from "../../app/taskSlice";
import { Path } from "../../Routes ";
import { Link } from "react-router-dom";
import { registerSelectPost } from "../../app/taskSlice";

const CreateArticle: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectPost);
  const getPost = async (id: number) => {
    try {
      const response = await axios.get(`http://localhost:3001/posts/${id}`);
      const data: any = response.data;
      dispatch(registerSelectPost(data));
    } catch {
      window.alert("取得失敗");
    }
  };
  const test = (id: any) => {
    getPost(id);
  };
  const dataList = data.map((item) => {
    const id = item.id;
    const title = item.title;
    const like = item.like;
    const createAt = item.createAt;
    return (
      <tr className={styles.itemWrapper} key={id}>
        <td className={styles.postTitle} key={id} onClick={() => test(id)}>
          <Link to={Path.article}>{title}</Link>
        </td>
        <td className={styles.createAt}>投稿日時：{createAt}</td>
        <td className={styles.like}>いいね：{like}</td>
      </tr>
    );
  });
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
        <table className={styles.table}>
          <tr>
            <th>タイトル</th>
            <th>投稿日時</th>
            <th>いいね数</th>
          </tr>
          {dataList}
        </table>
      </div>
    </div>
  );
};

export default CreateArticle;
