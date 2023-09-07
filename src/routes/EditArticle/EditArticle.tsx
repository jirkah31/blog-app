import React, { useEffect, useState } from "react";
import styles from "./EditArticle.module.scss";
import useArticle from "../../helpers_hooks/useArticle";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import useUpdateArticle from "../../helpers_hooks/useUpdateArticle";
import useRouterContext from "../../helpers_hooks/useRouterContext";
import classNames from "classnames";
import { useAppSelector } from "../../redux/reduxHooks";
import { PathsT } from "../../api/paths";
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
  const { data: articleData } = useArticle({ articleId });
  const article = articleData?.data;
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
    if (articleId) {
      updateArticle({ articleId, title, perex, accessToken });
      navigate(`/${PathsT.MyArticlesPathT}`);
    }
  };

  if (!isLoddegIn) {
    return <div>Not logged in. Please logged in!</div>;
  }

  return (
    <>
      {isLoddegIn && (
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
            <input
              type="text"
              id="title-input"
              className={styles.inputTitle}
              name="title"
              placeholder="My First Article"
              value={title}
              onChange={handleTitle}
            />

            <p className={styles.label}>Featured image</p>
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

            <label htmlFor="content" className={styles.label}>
              Content
            </label>
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
      )}
      <Outlet context={{ isLoddegIn, setIsLoggedIn }} />
    </>
  );
};

export default EditArticle;
