import axios, { AxiosRequestConfig } from "axios";
import { apiConfig } from "../api_configs";
import { successToast } from "../toasts/toasts";
import { errorToast } from "../toasts/toasts";

type PropsT = {
  articleId?: string;
  accessToken: string;
  editedArticle: {
    title: string;
    perex: string;
  };
};

const updateArticle = async ({
  articleId,
  editedArticle,
  accessToken,
}: PropsT) => {
  const { title, perex } = editedArticle;
  const config: AxiosRequestConfig = {
    ...apiConfig,
    method: "patch",
    url: `/articles/${articleId}`,
    data: {
      title: title,
      perex: perex,
    },
    headers: {
      ...apiConfig.headers,
      Authorization: accessToken,
    },
  };

  await axios(config)
    .then((response) => {
      successToast("Article was updated!");
      return response;
    })
    .catch((error) => {
      errorToast("ERROR happend!");
      console.log("ERROR_post_articles", error);
    });
};

export default updateArticle;
