import * as React from "react";
import { Routes, Route } from "react-router-dom";
import CreateArticle from "./pages/CreateArticle/CreateArticle";
import ReadArticle from "./pages/ReadArticle/ReadArticle";
import MainPage from "./pages/MainPage/MainPage";
import Article from "./pages/Article/Article";
import DirectArticle from "./pages/DirectArticle/DirectArticle";

export const Path = {
  home: "/",
  createArticle: "/createArticle",
  readArticle: "/readArticle",
  article: "/article",
  directArticle: "/directArticle",
};

const Routess: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path={Path.home} element={<MainPage />} />
        <Route path={Path.createArticle} element={<CreateArticle />} />
        <Route path={Path.readArticle} element={<ReadArticle />} />
        <Route path={Path.article} element={<Article />} />
        <Route path={Path.directArticle} element={<DirectArticle />} />
      </Routes>
    </div>
  );
};

export default Routess;
