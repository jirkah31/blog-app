import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
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
}: PropsT): Promise<void> => {
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
    .then((response: AxiosResponse) => {
      response.status === 200 && successToast("Article was updated!");
    })
    .catch((error) => {
      errorToast("ERROR happend!");
      console.log("ERROR_post_articles", error instanceof AxiosError);
    });
};

export default updateArticle;
