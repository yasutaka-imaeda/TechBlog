import * as React from "react";
import { Routes, Route } from "react-router-dom";
import CreateArticle from "./pages/CreateArticle/CreateArticle";
import ReadArticle from "./pages/ReadArticle/ReadArticle";
import MainPage from "./pages/MainPage/MainPage";

export const Path = {
  home: "/",
  createArticle: "/createArticle",
  readArticle: "/readArticle",
};

const Routess: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path={Path.home} element={<MainPage />} />
        <Route path={Path.createArticle} element={<CreateArticle />} />
        <Route path={Path.readArticle} element={<ReadArticle />} />
      </Routes>
    </div>
  );
};

export default Routess;
