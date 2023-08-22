import React, { useEffect, useState } from "react";
import styles from "./ListOfArticles.module.scss";
import { Outlet } from "react-router-dom";
import useAllArticles from "../../helpers_hooks/useAllArticles";
import { DeletePropsT } from "../../helpers_function/deleteArticle";
import useRouterContext from "../../helpers_hooks/useRouterContext";
import classNames from "classnames";
import { useAppSelector } from "../../helpers_hooks/reduxHooks";
import { ArticleType } from "../../helpers_hooks/useAllArticles";
import { RequestConfigT, apiConfig } from "../../api_configs";
import { PathsT } from "../../paths";
import useDeleteArticle from "../../helpers_hooks/useDeleteArticle";
import Button from "../../components/Button/Button";

const MyArticles: React.FC = () => {
  const [newArticles, setNewArticles] = useState<ArticleType[]>([]);
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode.value);
  const { accessToken } = useAppSelector((state) => state.accessToken.value);
  const { isLoddegIn } = useRouterContext();
  const {
    data,
    isError: isArticlesError,
    isLoading: isArticlesLoading,
    refetch,
  } = useAllArticles();
  const { mutate: deleteArticle } = useDeleteArticle();
  const articles = data?.data.items;

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      await refetch();
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

            <Button path={PathsT.CreateNewArticlePathT} type="button">
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

                {newArticles &&
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
                            path={`${PathsT.EditArticlePathT}/${articleId}`}
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
                  })}
              </tbody>
            </table>
          )}
          <Outlet />
        </>
      ) : (
        <div>You are not logged in. Please log in first.</div>
      )}
    </div>
  );
};

export default MyArticles;
