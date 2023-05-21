import axios, { AxiosRequestConfig } from "axios";
import { apiConfig } from "../api_configs";
import { successToast, errorToast } from "../toasts/toasts";

type PropsT = {
  accessToken: string;
  imageId: string;
  newArticle: {
    title: string;
    perex: string;
  };
};

const postNewArticle = async ({ accessToken, newArticle, imageId }: PropsT) => {
  const { title, perex } = newArticle;
  const config: AxiosRequestConfig = {
    ...apiConfig,
    method: "post",
    url: "/articles",
    data: {
      title,
      perex,
      imageId,
    },
    headers: {
      ...apiConfig.headers,
      Authorization: accessToken,
    },
  };

  await axios(config)
    .then((response) => {
      successToast("Article posted!")
      return response;
    })
    .catch((error) => {
      errorToast("Error durring posting article!")
      console.log("ERROR_post_articles", error);
    });
};

export default postNewArticle;
