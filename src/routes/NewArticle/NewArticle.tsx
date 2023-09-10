import React, { useState } from "react";
import styles from "./NewArticle.module.scss";
import postNewArticle from "../../helpers_function/postNewArticle";
import { Outlet, useNavigate } from "react-router-dom";
import useRouterContext from "../../helpers_hooks/useRouterContext";
import classNames from "classnames";
import { useAppSelector } from "../../redux/reduxHooks";
import { PathsT } from "../../api/api_configs";
import Button from "../../components/Button/Button";
import usePostImage from "../../helpers_hooks/usePostImage";

const NewArticle: React.FC = () => {
  const navigate = useNavigate();
  const { isLoddegIn, setIsLoggedIn } = useRouterContext();
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode.value);
  const { accessToken } = useAppSelector((state) => state.accessToken.value);
  const [title, setTitle] = useState<string>("");
  const [perex, setPerex] = useState<string>("");
  const [image, setImage] = useState<string | Blob>("");
  const mutation = usePostImage();

  const handleTitle = (event: React.FormEvent<HTMLInputElement>) => {
    setTitle((event.target as HTMLInputElement).value);
  };

  const handleContent = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setPerex((event.target as HTMLInputElement).value);
  };

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = new FormData();
    const newArticle = {
      title,
      perex,
    };

    data.append("image", image);
    const dataImage = await mutation.mutateAsync({ accessToken, data });
    console.log("dataImage: ", dataImage);
    const imageId = dataImage.data[0].imageId;
    await postNewArticle({ accessToken, newArticle, imageId });
    navigate(`/${PathsT.MyArticlesPathT}`);
  };

  if (!isLoddegIn) {
    return <div> You aren&apos;t logged in! PLease logged in.</div>;
  }

  return (
    <>
      {isLoddegIn && (
        <div
          className={classNames(styles.article, {
            [styles.darkMode]: isDarkMode,
          })}
        >
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.header}>
              <h1 className={styles.headline1}>Create new article</h1>
              <Button type="submit">Publish article</Button>
            </div>

            <label htmlFor="title" className={styles.label}>
              Article title
            </label>
            <input
              className={styles.titleInput}
              type="text"
              id="title-input"
              name="title-input"
              placeholder="My First Article"
              value={title}
              onChange={handleTitle}
            />

            <p className={styles.label}>Featured image</p>
            <label className={styles.btnFile} htmlFor="filePicker">
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
              className={styles.contentInput}
              id="content-input"
              name="content-input"
              placeholder="Supports markdown. Yay!"
              value={perex}
              onChange={handleContent}
            />
          </form>
        </div>
      )}
      <Outlet context={{ isLoddegIn, setIsLoggedIn }} />
    </>
  );
};

export default NewArticle;
