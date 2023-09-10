import React, { useEffect, useState } from "react";
import styles from "./ListOfArticles.module.scss";
import { Outlet } from "react-router-dom";
import useAllArticles from "../../helpers_hooks/useAllArticles";
import { DeletePropsT } from "../../helpers_function/deleteArticle";
import useRouterContext from "../../helpers_hooks/useRouterContext";
import classNames from "classnames";
import { useAppSelector } from "../../redux/reduxHooks";
import { ArticleType } from "../../helpers_hooks/useAllArticles";
import { PathsT } from "../../api/api_configs";
import useDeleteArticle from "../../helpers_hooks/useDeleteArticle";
import Button from "../../components/Button/Button";
import TableLine from "../../components/TableLine/TableLine";

const ListOfArticles: React.FC = () => {
  const [newArticles, setNewArticles] = useState<ArticleType[]>([]);
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode.value);
  const { accessToken } = useAppSelector((state) => state.accessToken.value);
  const { isLoddegIn, setIsLoggedIn } = useRouterContext();
  const {
    data,
    isError: isArticlesError,
    isFetching: isArticleFetching,
    isLoading: isArticlesLoading,
    refetch: refetchArticles,
  } = useAllArticles();
  const { mutate: deleteArticle } = useDeleteArticle(refetchArticles);
  const articles = data?.data.items;

  useEffect(() => {
    setNewArticles(articles);
    refetchArticles();
  }, [articles]);

  const handleDeleteArticle = async ({
    articleId,
    accessToken,
  }: DeletePropsT) => {
    if (accessToken && articleId) {
      await deleteArticle({ articleId, accessToken });
      await setNewArticles(articles);
    }
  };

  if (isArticlesError) {
    <h2>Something goes wrong...</h2>;
  }

  if (!isLoddegIn) {
    return <div>You are not logged in. Please log in first.</div>;
  }

  return (
    <div className={classNames(styles.articles, { "dark-mode": isDarkMode })}>
      {isLoddegIn && (
        <>
          <div className={styles.header}>
            <h1 className={styles.headline}>My articles</h1>

            <Button path={`/${PathsT.CreateNewArticlePathT}`} type="button">
              Create new article
            </Button>
          </div>

          {isArticlesLoading ? (
            <h2>Loading...</h2>
          ) : (
            <table className={styles.table}>
              <tbody>
                <tr>
                  <th className={styles.th}>
                    <input type="checkbox" />
                  </th>
                  <th className={styles.th}>Article title</th>
                  <th className={styles.th}>Perex</th>
                  <th className={styles.th}>Author</th>
                  <th className={styles.th}># of comments</th>
                  <th className={styles.th}>Action</th>
                </tr>

                {isArticleFetching ? (
                  <tr>
                    <td>
                      <h2>Loading articles...</h2>
                    </td>
                  </tr>
                ) : (
                  newArticles &&
                  newArticles.map((article) => {
                    return (
                      <TableLine
                        key={article.articleId}
                        article={article}
                        handleDeleteArticle={() =>
                          handleDeleteArticle({
                            articleId: article.articleId,
                            accessToken,
                          })
                        }
                      />
                    );
                  })
                )}
              </tbody>
            </table>
          )}
        </>
      )}
      <Outlet context={{ isLoddegIn, setIsLoggedIn }} />
    </div>
  );
};

export default ListOfArticles;
