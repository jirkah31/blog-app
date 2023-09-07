import { AxiosError, AxiosResponse } from "axios";
import { AxiosInstance } from "../api/api_configs";
import { successToast } from "../toasts/toasts";
import { errorToast } from "../toasts/toasts";
import { PathsT } from "../api/paths";

export interface DeletePropsT {
  articleId: string;
  accessToken: string | null;
}

// OLD VERSION DELETING ARTICLES

const deleteArticle = ({
  articleId,
  accessToken,
}: DeletePropsT) => {

  AxiosInstance.delete(`${PathsT.ArticlesPathT}/${articleId}`, {
    headers: {
      Authorization: accessToken
    }
  })
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
