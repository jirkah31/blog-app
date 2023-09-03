import React, { useEffect, useState } from "react";
import styles from "./ListOfArticles.module.scss";
import { Outlet } from "react-router-dom";
import useAllArticles from "../../helpers_hooks/useAllArticles";
import { DeletePropsT } from "../../helpers_function/deleteArticle";
import useRouterContext from "../../helpers_hooks/useRouterContext";
import classNames from "classnames";
import { useAppSelector } from "../../redux/reduxHooks";
import { ArticleType } from "../../helpers_hooks/useAllArticles";
import { RequestConfigT, apiConfig } from "../../api_configs";
import { PathsT } from "../../paths";
import useDeleteArticle from "../../helpers_hooks/useDeleteArticle";
import Button from "../../components/Button/Button";

const MyArticles: React.FC = () => {
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
  }, [articles]);

  const handleDeleteArticle = async ({
    articleId,
    accessToken,
  }: DeletePropsT) => {
    if (accessToken && articleId) {
      const config: RequestConfigT = {
        ...apiConfig,
        method: "delete",
        url: `${PathsT.ArticlesPathT}/${articleId}`,
        headers: {
          ...apiConfig.headers,
          Authorization: accessToken,
        },
      };

      await deleteArticle(config);
      // await refetchArticles();
      await setNewArticles(articles);
    }
  };

  if (isArticlesError) {
    <h2>Something goes wrong...</h2>;
  }

  return (
    <div className={classNames(styles.articles, { "dark-mode": isDarkMode })}>
      {isLoddegIn ? (
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
                  <h2>Loading articles...</h2>
                ) : (
                  newArticles &&
                  newArticles.map((article) => {
                    const { articleId, title, perex } = article;
                    return (
                      <tr key={articleId}>
                        <td className={styles.td}>
                          {" "}
                          <input type="checkbox" />{" "}
                        </td>
                        <td className={styles.td}>{title}</td>
                        <td className={styles.td}>{perex}</td>
                        <td className={styles.td}>Elisabeth Straingth</td>
                        <td className={styles.td}>4</td>
                        <td className={styles.td}>
                          <Button
                            small
                            path={`/${PathsT.EditArticlePathT}/${articleId}`}
                          >
                            edit
                          </Button>
                          <Button
                            small
                            onClick={() =>
                              handleDeleteArticle({ articleId, accessToken })
                            }
                          >
                            delete
                          </Button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          )}
        </>
      ) : (
        <div>You are not logged in. Please log in first.</div>
      )}
      <Outlet context={{ isLoddegIn, setIsLoggedIn }} />
    </div>
  );
};

export default MyArticles;
