import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { apiConfig } from "../api_configs";
import { successToast, errorToast } from "../toasts/toasts";

interface PropsT {
  accessToken: string;
  imageId: string;
  newArticle: {
    title: string;
    perex: string;
  };
}

const postNewArticle = async ({
  accessToken,
  newArticle,
  imageId,
}: PropsT): Promise<void> => {
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
    .then((response: AxiosResponse) => {
      response.status === 200 && successToast("Article posted!");
    })
    .catch((error) => {
      errorToast("Error durring posting article!");
      console.log("ERROR_post_articles", error instanceof AxiosError);
    });
};

export default postNewArticle;
