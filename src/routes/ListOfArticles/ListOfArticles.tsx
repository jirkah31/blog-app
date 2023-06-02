import React, { useEffect, useState } from "react";
import "./ListOfArticles.scss";
import { Link, Outlet } from "react-router-dom";
import deleteArticle from "../../helpers_function/deleteArticle";
import useAllArticles from "../../helpers_hooks/useAllArticles";
import { DeletePropsT } from "../../helpers_function/deleteArticle";
import useRouterContext from "../../helpers_hooks/useRouterContext";
import useImage from "../../helpers_hooks/useImage";

export default function MyArticles() {
  const { isLoddegIn, accessToken } = useRouterContext();
  const [newArticles, setNewArticles] = useState([]);
  const { articles, refetch } = useAllArticles(accessToken);
  const image = useImage(accessToken);
  console.log("useIMage : ", image);

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
