import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Header from "../../component/Header/Header";
import styles from "./Article.module.scss";
import axios from "axios";
import { selectPost } from "../../app/taskSlice";
import { Path } from "../../Routes ";
import { Link } from "react-router-dom";
import { selectSelectPost } from "../../app/taskSlice";
import { marked } from "marked";
import DOMPurify from "dompurify";

const Article: React.FC = () => {
  const data = useAppSelector(selectSelectPost);
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
      </div>
    </div>
  );
};

export default Article;
