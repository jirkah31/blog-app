import React, { useEffect, useState } from "react";
import "./ListOfArticles.scss";
import { Link, Outlet } from "react-router-dom";
import deleteArticle from "../../helpers_function/deleteArticle";
import useAllArticles from "../../helpers_hooks/useAllArticles";
import { DeletePropsT } from "../../helpers_function/deleteArticle";
import useRouterContext from "../../helpers_hooks/useRouterContext";
import useImage from "../../helpers_hooks/useImage";
import classNames from "classnames";
import ButtonSmall from "../../components/ButtonSmall/ButtonSmall";
import { useAppSelector } from "../../helpers_hooks/reduxHooks";
import { ArticleType } from "../../helpers_hooks/useAllArticles";

export default function MyArticles() {
  const [newArticles, setNewArticles] = useState<ArticleType[]>([]);
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode.value);
  const { accessToken } = useAppSelector((state) => state.accessToken.value);
  const { isLoddegIn } = useRouterContext();
  const { articles, refetch } = useAllArticles();
  // const image = useImage();

  useEffect(() => {
    setNewArticles(articles);
  }, [articles]);

  const handleDeleteArticle = async ({
    articleId,
    accessToken,
  }: DeletePropsT) => {
    if (accessToken && articleId) {
      await deleteArticle({ articleId, accessToken });
      refetch();
      await setNewArticles(articles);
    }
  };

  return (
    <div className={classNames("my-articles", { "dark-mode": isDarkMode })}>
      {isLoddegIn ? (
        <>
          <div className="header">
            <h1>My articles</h1>

            <Link to="/create-new-article">
              <button className="normal-btn" type="button">
                Create new article
              </button>
            </Link>
          </div>

          <table className="table-articles">
            <tbody>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Article title</th>
                <th>Perex</th>
                <th>Author</th>
                <th># of comments</th>
                <th>Action</th>
              </tr>
              {newArticles.map((article) => {
                const { articleId, title, perex } = article;
                return (
                  <tr key={articleId}>
                    <td>
                      {" "}
                      <input type="checkbox" />{" "}
                    </td>
                    <td>{title}</td>
                    <td>{perex}</td>
                    <td>Elisabeth Straingth</td>
                    <td>4</td>
                    <td>
                      <ButtonSmall path={`/edit-article/${articleId}`}>
                        edit
                      </ButtonSmall>
                      <ButtonSmall
                        onClick={() =>
                          handleDeleteArticle({ articleId, accessToken })
                        }
                      >
                        delete
                      </ButtonSmall>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Outlet />
        </>
      ) : (
        <div>You aren't logeed in. Please log in first.</div>
      )}
    </div>
  );
}
