import axios, { AxiosError, AxiosResponse } from "axios";
import { apiConfig } from "../api_configs";
import { successToast } from "../toasts/toasts";
import { errorToast } from "../toasts/toasts";
import { RequestConfigT } from "../api_configs";
import { PathsT } from "../paths";

export interface DeletePropsT {
  articleId: string;
  accessToken: string | null;
}

// OLD VERSION DELETING ARTICLES

const deleteArticle = async ({
  articleId,
  accessToken,
}: DeletePropsT): Promise<void> => {
  const config: RequestConfigT = {
    ...apiConfig,
    method: "delete",
    url: `${PathsT.ArticlesPathT}/${articleId}`,
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
      console.error("ERROR_post_articles", error as AxiosError);
    });
};

export default deleteArticle;
