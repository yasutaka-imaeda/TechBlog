import React, { useState } from "react";
import Header from "../../component/Header/Header";
import styles from "./CreateArticle.module.scss";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { marked } from "marked";
import DOMPurify from "dompurify";

const CreateArticle: React.FC = () => {
  const [markdown, setMarkdown] = useState("");

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
        <div>記事編集</div>
        <div className={styles.titleWrapper}>
          <div>タイトル</div>
          <input />
        </div>
        <div className={styles.inputWrapper}>
          <div>入力欄</div>
          <SimpleMDE onChange={(e) => setMarkdown(e)} />
        </div>
        <div className={styles.preview}>
          <div>プレビュー</div>
          {markdown && (
            <div id="body">
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(marked(markdown)),
                }}
              ></div>
            </div>
          )}
        </div>
        <div className={styles.sendBtn}>投稿する</div>
      </div>
    </div>
  );
};

export default CreateArticle;
