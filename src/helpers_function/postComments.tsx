import axios from "axios";
import { apiConfig } from "../api_configs";

type PropsT = {
  accessToken: string;
  content: string;
  articleId: string;
};

const postComments = ({ articleId, accessToken, content }: PropsT) => {
  const config = {
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

  const getApiKey = async () => {
    await axios(config)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log("ERROR_COMMENTS", error);
      });
  };
  getApiKey();
};

export default postComments;
