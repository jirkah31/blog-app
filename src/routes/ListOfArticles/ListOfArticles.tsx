import React, { useEffect, useState } from "react";
import "./ListOfArticles.scss";
import { Link, Outlet } from "react-router-dom";
import deleteArticle from "../../helpers_handlers/deleteArticle";
import useAllArticles from "../../helpers_hooks/useAllArticles";
import { DeletePropsT } from "../../helpers_handlers/deleteArticle";
import useRouterContext from "../../helpers_hooks/useRouterContext";

export default function MyArticles() {
  const { isLoddegIn, accessToken } = useRouterContext();
  const {articles, refetch} = useAllArticles(accessToken);

  useEffect(() => {
    setArticles(loadArticles);
  }, [loadArticles]);

  const handleDeleteArticle = async ({
    articleId,
    accessToken,
  }: DeletePropsT) => {
    if (accessToken !== "") {
      await deleteArticle({ articleId, accessToken });
      await setArticles(loadArticles); // tady mi dam jde neaktualizovaný articles, protože to znovu nezavolá useAllArticles
      // Aby se ti načetli aktuální články, musís znovu zavolat fci getAllArticles.
      // Takhle si tam ukládáš znova to, co už si tam měl uložený
    
    }
  };

  return (
    <div className="my-articles">
      {isLoddegIn ? (
        <>
          <div className="header">
            <h1>My articles</h1>

            <Link to="/create-new-article">
              <button type="button">Create new article</button>
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
              {articles.map((article) => {
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
                      <Link to={`/edit-article/${articleId}`}>
                        <button>edit</button>
                      </Link>
                      <button
                        onClick={() =>
                          handleDeleteArticle({ articleId, accessToken })
                        }
                      >
                        delete
                      </button>
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
