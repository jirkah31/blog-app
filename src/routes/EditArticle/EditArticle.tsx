import React, { useEffect, useState } from "react";
import "./EditArticle.scss";
import postImage from "../../helpers_handlers/postImage";
import useArticle from "../../helpers_hooks/useArticle";
import { useNavigate, useParams } from "react-router-dom";
import updateArticle from "../../helpers_handlers/updateArticle";
import useRouterContext from "../../helpers_hooks/useRouterContext";

export default function EditArticle() {
  const { isLoddegIn, accessToken } = useRouterContext();
  const { articleId } = useParams();
  const navigate = useNavigate();
  const article = useArticle({ articleId });
  const [title, setTitle] = useState("");
  const [perex, setPerex] = useState("");
  const [image, setImage] = useState<File>();

  useEffect(() => {
    setTitle(article.title);
    setPerex(article.perex);
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const editedArticle = {
      title,
      perex,
    };
    updateArticle({ articleId, accessToken, editedArticle });
    navigate("/my-articles");
    // postImage({accessToken, image}) //tady updateImge
  };

  return (
    <>
      {isLoddegIn ? (
        <div className="new-articles">
          <form onSubmit={handleSubmit}>
            <div className="header">
              <h1>Edit article</h1>
              <button type="submit">Edit article</button>
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
              onChange={handlePerex}
            />
          </form>
        </div>
      ) : (
        <div>Not logged in. Please logged in!</div>
      )}
    </>
  );
}
