import React from "react";
import Article from "../../components/Article/Article";
import styles from "./AllArticles.module.scss";
import { Outlet } from "react-router-dom";
import useAllArticles from "../../helpers_hooks/useAllArticles";
import classNames from "classnames";
import { useAppSelector } from "../../redux/reduxHooks";
import { ArticleType } from "../../helpers_hooks/useAllArticles";
import useRouterContext from "../../helpers_hooks/useRouterContext";

const AllArticles: React.FC = () => {
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode.value);
  const { isLoddegIn, setIsLoggedIn } = useRouterContext();
  const { data, isLoading, isError } = useAllArticles();
  const articles = data?.data.items;

  if (isError) {
    return <h2>Something wrong happend...</h2>;
  }

  return (
    <>
      <h1
        className={classNames(styles.title, { [styles.darkMode]: isDarkMode })}
      >
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
              createdAt={createdAt}
              perex={perex}
              title={title}
            />
          );
        })}
      <Outlet context={{ isLoddegIn, setIsLoggedIn }} />
    </>
  );
};

export default AllArticles;
