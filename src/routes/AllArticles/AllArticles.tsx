import React from "react";
import Article from "../../components/Article/Article";
import "./AllArticles.scss";
import { Outlet } from "react-router-dom";
import useAllArticles from "../../helpers_hooks/useAllArticles";
import classNames from "classnames";
import { useAppSelector } from "../../helpers_hooks/reduxHooks";
import { ArticleType } from "../../helpers_hooks/useAllArticles";

const AllArticles: React.FC = () => {
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode.value);
  const { data, isLoading, isError } = useAllArticles();
  // const { data, isLoading, isError } = query;
  const articles = data?.data.items;

  if (isError) {
    return <h2>Something wrong happend...</h2>;
  }

  return (
    <>
      <h1 className={classNames("title", { "dark-mode": isDarkMode })}>
        Recent articles
      </h1>

      {isLoading && <h2>Loading...</h2>}

      {articles &&
        articles.map((article: ArticleType) => {
          const { articleId, title, perex, imageId, createdAt } = article;
          return (
            <Article
              key={articleId}
              articleId={articleId}
              imageId={imageId}
              author="{author}"
              createdAt={createdAt}
              perex={perex}
              title={title}
            />
          );
        })}
      <Outlet />
    </>
  );
};

export default AllArticles;
