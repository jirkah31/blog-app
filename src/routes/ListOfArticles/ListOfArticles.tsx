import React, { useEffect, useState } from "react";
import "./ListOfArticles.scss";
import { Link, Outlet } from "react-router-dom";
import useAllArticles from "../../helpers_hooks/useAllArticles";
import { DeletePropsT } from "../../helpers_function/deleteArticle";
import useRouterContext from "../../helpers_hooks/useRouterContext";
import classNames from "classnames";
import ButtonSmall from "../../components/ButtonSmall/ButtonSmall";
import { useAppSelector } from "../../helpers_hooks/reduxHooks";
import { ArticleType } from "../../helpers_hooks/useAllArticles";
import { RequestConfigT, apiConfig } from "../../api_configs";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { errorToast, successToast } from "../../toasts/toasts";
import { PathsT } from "../../paths";

const MyArticles: React.FC = () => {
  const [newArticles, setNewArticles] = useState<ArticleType[]>([]);
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode.value);
  const { accessToken } = useAppSelector((state) => state.accessToken.value);
  const { isLoddegIn } = useRouterContext();
  const { query } = useAllArticles();
  const { data, isError, isLoading, refetch } = query;
  const articles = data?.data.items;
  const mutation = useMutation({
    mutationFn: (configArg: RequestConfigT) => axios(configArg),
    onSuccess: async () => {
      await refetch();
      await setNewArticles(articles);
      successToast("Deletion success!");
    },
    onError: () => errorToast("Deletion fail!"),
  });

  useEffect(() => {
    refetch();
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
      mutation.mutate(config);
    }
  };

  if (isError) {
    <h2>Something goes wrong...</h2>;
  }

  return (
    <div className={classNames("my-articles", { "dark-mode": isDarkMode })}>
      {isLoddegIn ? (
        <>
          <div className="header">
            <h1>My articles</h1>

            <Link to={PathsT.CreateNewArticlePathT}>
              <button className="normal-btn" type="button">
                Create new article
              </button>
            </Link>
          </div>

          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
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

                {newArticles &&
                  newArticles.map((article) => {
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
                          <ButtonSmall
                            path={`${PathsT.EditArticlePathT}/${articleId}`}
                          >
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
          )}
          <Outlet />
        </>
      ) : (
        <div>You aren't logeed in. Please log in first.</div>
      )}
    </div>
  );
};

export default MyArticles;
