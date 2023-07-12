import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { apiConfig } from "../api_configs";

interface PropsT {
  accessToken: string;
  content: string;
  articleId: string;
}

const postComments = async ({ articleId, accessToken, content }: PropsT) => {
  const config: AxiosRequestConfig = {
    ...apiConfig,
    method: "post",
    url: "/comments",
    data: {
      articleId,
      content,
      author: "Jirka",
    },
    headers: {
      ...apiConfig.headers,
      Authorization: accessToken,
    },
  };

  await axios(config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("ERROR_COMMENTS", error instanceof AxiosError);
    });
};

export default postComments;
