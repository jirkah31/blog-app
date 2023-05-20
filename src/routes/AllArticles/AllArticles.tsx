import React from "react";
import Article from "../../components/Article/Article";
import "./AllArticles.scss";
import { Outlet } from "react-router-dom";
import image1 from "../../imgexample/image1.jpg";
import useAllArticles from "../../helpers_hooks/useAllArticles";
import getFullDateFromISO from "../../helpers_function/getFullDateFromString";
import useImage from "../../helpers_hooks/useImage";
import useLoggedIn from "../../helpers_hooks/useLoggedIn";
import getTenant from "../../helpers_function/getTenant";

export default function AllArticles() {
  const { accessToken } = useLoggedIn();
  const articles = useAllArticles(accessToken);
  // const image = useImage(accessToken)

  const tenantID = getTenant("f6802748-3e4c-4e86-8a53-2a38ef8f5a9b")

  console.log('tenantID from ALLARTCILES: ', tenantID)

  return (
    <>
      <h1 className="title">Recent articles</h1>
      {articles.map((article: any) => {
        const { day, month, year } = getFullDateFromISO(article.createdAt);
        const date = `${day}.${month}.${year}`;
        const { articleId, title, perex } = article;

        return (
          <Article
            key={articleId}
            id={articleId}
            image={image1}
            author="{author}"
            date={date}
            perex={perex}
            title={title}
          />
        );
      })}
      <Outlet />
    </>
  );
}
