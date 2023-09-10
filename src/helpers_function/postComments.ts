import { AxiosError } from "axios";
import { AxiosInstance, PathsT } from "../api/api_configs";

interface PropsT {
  accessToken: string;
  content: string;
  articleId: string;
}

const postComments = ({ articleId, accessToken, content }: PropsT) => {
  AxiosInstance.post(
    PathsT.CommentsPathT,
    {
      articleId,
      content,
      author: "Jirka",
    },
    {
      headers: {
        Authorization: accessToken,
      },
    },
  )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("ERROR_COMMENTS", error instanceof AxiosError);
    });
};

export default postComments;
