import React, { useEffect, useState } from "react";
import styles from "./EditArticle.module.scss";
import useArticle from "../../helpers_hooks/useArticle";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import useUpdateArticle from "../../helpers_function/useUpdateArticle";
import useRouterContext from "../../helpers_hooks/useRouterContext";
import classNames from "classnames";
import { useAppSelector } from "../../redux/reduxHooks";
import { RequestConfigT, apiConfig } from "../../api_configs";
import { PathsT } from "../../paths";
import Button from "../../components/Button/Button";

const EditArticle: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [perex, setPerex] = useState<string>("");
  const [image, setImage] = useState<File>();
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode.value);
  const { accessToken } = useAppSelector((state) => state.accessToken.value);
  const { isLoddegIn, setIsLoggedIn } = useRouterContext();
  const { articleId } = useParams();
  const navigate = useNavigate();
  const { query } = useArticle({ articleId });
  const article = query.data?.data;
  const { mutate: updateArticle } = useUpdateArticle();

  useEffect(() => {
    if (article) {
      setTitle(article.title);
      setPerex(article.perex);
    }
  }, [article]);

  const handleTitle = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTitle((event.target as HTMLInputElement).value);
  };

  const handlePerex = (event: React.FormEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setPerex((event.target as HTMLInputElement).value);
  };

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const editConfig: RequestConfigT = {
      ...apiConfig,
      method: "patch",
      url: `${PathsT.ArticlesPathT}/${articleId}`,
      data: {
        title,
        perex,
      },
      headers: {
        ...apiConfig.headers,
        Authorization: accessToken,
      },
    };
    updateArticle(editConfig);
    navigate(`/${PathsT.MyArticlesPathT}`);
  };

  return (
    <>
      {isLoddegIn ? (
        <div
          className={classNames(styles.editArticle, {
            [styles.darkMode]: isDarkMode,
          })}
        >
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.header}>
              <h1 className={styles.headline}>Edit article</h1>
              <Button type="submit">Edit article</Button>
            </div>

            <label htmlFor="title" className={styles.label}>
              Article title
            </label>
            <br />
            <input
              type="text"
              id="title-input"
              className={styles.inputTitle}
              name="title"
              placeholder="My First Article"
              value={title}
              onChange={handleTitle}
            />
            <br />

            <p className="input-name">Featured image</p>
            <br />
            <label
              htmlFor="filePicker"
              className={classNames(styles.btnFile, {
                [styles.darkMode]: isDarkMode,
              })}
            >
              Upload an Image
            </label>
            <input
              id="filePicker"
              style={{ visibility: "hidden" }}
              type={"file"}
              onChange={handleImage}
            />
            <br />

            <label htmlFor="content" className={styles.label}>
              Content
            </label>
            <br />
            <textarea
              id="content-input"
              className={styles.inputContent}
              name="content"
              placeholder="Supports markdown. Yay!"
              value={perex}
              onChange={handlePerex}
            />
          </form>
        </div>
      ) : (
        <div>Not logged in. Please logged in!</div>
      )}
      <Outlet context={{ isLoddegIn, setIsLoggedIn }} />
    </>
  );
};

export default EditArticle;
