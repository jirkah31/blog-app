import React, { useState } from "react";
import "./NewArticle.scss";
import postNewArticle from "../../helpers_function/postNewArticle";
import postImage from "../../helpers_function/postImage";
import { useNavigate } from "react-router-dom";
import useRouterContext from "../../helpers_hooks/useRouterContext";

export default function NewArticle() {
  const navigate = useNavigate();
  const { isLoddegIn, accessToken } = useRouterContext();
  const [title, setTitle] = useState("");
  const [perex, setPerex] = useState("");
  const [image, setImage] = useState<File>();

  const handleTitle = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTitle((event.target as HTMLInputElement).value);
  };

  const handleContent = (event: React.FormEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setPerex((event.target as HTMLInputElement).value);
  };

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const newArticle = {
      title,
      perex,
    };
    const imageId = await postImage({ accessToken, image });
    await postNewArticle({ accessToken, newArticle, imageId });
    navigate("/my-articles");
  };

  return (
    <>
      {isLoddegIn ? (
        <div className="new-articles">
          <form onSubmit={handleSubmit}>
            <div className="header">
              <h1>Create new article</h1>
              <button type="submit">Publish article</button>
            </div>

            <label htmlFor="title" className="input-name">
              Article title
            </label>
            <br />
            <input
              type="text"
              id="title"
              name="title"
              placeholder="My First Article"
              value={title}
              onChange={handleTitle}
            />
            <br />

            <p className="input-name">Featured image</p>
            <br />
            <label htmlFor="filePicker" className="file-btn">
              Upload an Image
            </label>
            <input
              id="filePicker"
              style={{ visibility: "hidden" }}
              type={"file"}
              onChange={handleImage}
            />
            <br />

            <label htmlFor="content" className="input-name">
              Content
            </label>
            <br />
            <textarea
              id="content"
              name="content"
              placeholder="Supports markdown. Yay!"
              value={perex}
              onChange={handleContent}
            />
          </form>
        </div>
      ) : (
        <div> You aren't logged in! PLease logged in.</div>
      )}
    </>
  );
}
