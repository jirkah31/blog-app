import React, { useState } from "react";
import "./NewArticle.scss";
import postNewArticle from "../../helpers_function/postNewArticle";
import postImage from "../../helpers_function/postImage";
import { useNavigate } from "react-router-dom";
import useRouterContext from "../../helpers_hooks/useRouterContext";
import classNames from "classnames";
import { useAppSelector } from "../../helpers_hooks/reduxHooks";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { RequestConfigT, apiConfig } from "../../api_configs";
import { PathsT } from "../../paths";

const NewArticle: React.FC = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode.value);
  const { accessToken } = useAppSelector((state) => state.accessToken.value);
  const { isLoddegIn } = useRouterContext();
  const [title, setTitle] = useState<string>("");
  const [perex, setPerex] = useState<string>("");
  const [image, setImage] = useState<any>();

  //ZAČÁTEK MUTATION

  const mutation = useMutation({
    mutationFn: async (config: RequestConfigT) => await axios(config),
    onError: (error, variables, context) => {
      console.error("error, variables, context: ", error, variables, context);
    },
    onSuccess: (data) => {
      return { data };
    },
  });

  //KONEC MUTATION

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

    const data = new FormData();
    data.append("image", image);

    const configImage: RequestConfigT = {
      ...apiConfig,
      url: PathsT.ImagesPathT,
      method: "post",
      headers: {
        ...apiConfig.headers,
        Authorization: accessToken,
        "Content-Type": "multipart/form-data",
      },
      data,
    };
    const newArticle = {
      title,
      perex,
    };

    const dataImage = await mutation.mutateAsync(configImage);
    const imageId = dataImage.data[0].imageId;
    await postNewArticle({ accessToken, newArticle, imageId });
    navigate(PathsT.MyArticlesPathT);
  };

  return (
    <>
      {isLoddegIn ? (
        <div
          className={classNames("new-articles", { "dark-mode": isDarkMode })}
        >
          <form onSubmit={handleSubmit}>
            <div className="header">
              <h1>Create new article</h1>
              <button className="submit-button" type="submit">
                Publish article
              </button>
            </div>

            <label htmlFor="title" className="input-name">
              Article title
            </label>
            <br />
            <input
              type="text"
              id="title-input"
              name="title-input"
              placeholder="My First Article"
              value={title}
              onChange={handleTitle}
            />
            <br />

            <p className="input-name">Featured image</p>
            <br />
            <label className="submit-button file-btn" htmlFor="filePicker">
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
              id="content-input"
              name="content-input"
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
};

export default NewArticle;
