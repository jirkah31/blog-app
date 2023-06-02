import axios, { AxiosRequestConfig } from "axios";
import { apiConfig } from "../api_configs";
import { successToast } from "../toasts/toasts";
import { errorToast } from "../toasts/toasts";

export type DeletePropsT = {
  articleId: string;
  accessToken: string | null;
};

const deleteArticle = async ({ articleId, accessToken }: DeletePropsT) => {
  const config: AxiosRequestConfig = {
    ...apiConfig,
    method: "delete",
    url: `/articles/${articleId}`,
    headers: {
      ...apiConfig.headers,
      Authorization: accessToken,
    },
  };

  await axios(config)
    .then((response) => {
      successToast("Delete success!");
      return response;
    })
    .catch((error) => {
      errorToast("Delete fail!");
      console.log("ERROR_post_articles", error);
    });
};

export default deleteArticle;
