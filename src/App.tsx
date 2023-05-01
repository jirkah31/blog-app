import React from "react";
import "./App.scss";
import Articles from "./routes/AllArticles/AllArticles";
import Navigation from "./routes/Navigation/Navigation";
import Login from "./routes/Login/Login";
import { Routes, Route } from "react-router-dom";
import MyArticles from "./routes/MyArticles/MyArticles";
import NewArticle from "./routes/NewArticle/NewArticle";
import RecentArticle from "./components/RecentArticle/RecentArticle";

export default function App() {
  return (
    <div>
      <Navigation />
      <div className="container">
        <Routes>
          <Route index element={<Articles />} />
          <Route path="/login" element={<Login />} />
          <Route path="/article" element={<RecentArticle />} />

          <Route path="/my-articles" element={<MyArticles />} />
          <Route path="/create-new-article" element={<NewArticle />} />
        </Routes>
      </div>
    </div>
  );
}
