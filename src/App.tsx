import React from "react";
import Header from "./component/Header/Header";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
      </div>
    </div>
  );
};

export default App;
