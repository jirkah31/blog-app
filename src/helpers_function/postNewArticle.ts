import { AxiosError, AxiosResponse } from "axios";
import { successToast, errorToast } from "../toasts/toasts";
import { AxiosInstance, PathsT } from "../api/api_configs";

interface PropsT {
  accessToken: string;
  imageId: string;
  newArticle: {
    title: string;
    perex: string;
  };
}

const postNewArticle = ({ accessToken, newArticle, imageId }: PropsT) => {
  const { title, perex } = newArticle;

  AxiosInstance.post(
    PathsT.ArticlesPathT,
    {
      title,
      perex,
      imageId,
    },
    {
      headers: {
        Authorization: accessToken,
      },
    },
  )
    .then((response: AxiosResponse) => {
      response.status === 200 && successToast("Article posted!");
    })
    .catch((error) => {
      errorToast("Error durring posting article!");
      console.error("ERROR_post_articles", error instanceof AxiosError);
    });
};

export default postNewArticle;
