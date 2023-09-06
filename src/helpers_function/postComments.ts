import axios, { AxiosError } from "axios";
import { apiConfig } from "../api_configs";
import { RequestConfigT } from "../api_configs";
import { PathsT } from "../paths";

interface PropsT {
  accessToken: string;
  content: string;
  articleId: string;
}

const postComments = ({ articleId, accessToken, content }: PropsT) => {
  const config: RequestConfigT = {
    ...apiConfig,
    method: "post",
    url: PathsT.CommentsPathT,
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

  axios(config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("ERROR_COMMENTS", error instanceof AxiosError);
    });
};

export default postComments;
