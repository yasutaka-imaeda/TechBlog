import React, { useState, useEffect } from "react";
import Header from "../../component/Header/Header";
import styles from "./DirectArticle.module.scss";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { marked } from "marked";
import DOMPurify from "dompurify";
import axios from "axios";
import { selectSelectPost } from "../../app/taskSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const DirectArticle: React.FC = () => {
  const data = useAppSelector(selectSelectPost);
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  // const hours = now.getHours()

  const handleChange = (e: any) => {
    setTitle(() => e.target.value);
  };
  useEffect(() => {
    setMarkdown(data.bodyText);
  }, []);

  const put = async () => {
    const bodyText = marked(markdown);
    const body = {
      title: title,
      bodyText: markdown,
      bodyTextHtml: bodyText,
      createAt: `${year}/${month}/${date}`,
      like: 0,
    };
    await axios.put(`http://localhost:3001/posts/${data.id}`, body);
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.pageTitle}>記事編集</div>
        <div className={styles.titleWrapper}>
          <div>タイトル</div>
          <input
            onChange={handleChange}
            typeof="text"
            placeholder={data.title}
          />
        </div>
        <div className={styles.inAndOut}>
          <div className={styles.inputWrapper}>
            <div>入力欄</div>
            <SimpleMDE onChange={(e) => setMarkdown(e)} value={data.bodyText} />
          </div>
          <div className={styles.preview}>
            <div>プレビュー</div>
            {markdown && (
              <div className={styles.previewBody} id="body">
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(marked(markdown)),
                  }}
                ></div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.sendBtn} onClick={put}>
          編集完了する
        </div>
      </div>
    </div>
  );
};

export default DirectArticle;
