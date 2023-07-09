import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { apiConfig } from "../api_configs";
import { successToast } from "../toasts/toasts";
import { errorToast } from "../toasts/toasts";

export interface DeletePropsT {
  articleId: string;
  accessToken: string | null;
}

const deleteArticle = async ({
  articleId,
  accessToken,
}: DeletePropsT): Promise<void> => {
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
    .then((response: AxiosResponse<object>) => {
      successToast("Delete success!");
      return response;
    })
    .catch((error) => {
      errorToast("Delete fail!");
      console.log("ERROR_post_articles", error as AxiosError);
    });
};

export default deleteArticle;
