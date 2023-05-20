import axios from "axios";
import { apiConfig } from "../api_configs";

type PropsT = {
  accessToken: string;
  articleId: string;
  comment: string;
};

const postComments = ({accessToken, articleId, comment}: PropsT) => {
  const config = {
    ...apiConfig,
    url: "/comments",
    method: "post",
    data: {
      comment,
      articleId,
    },
    headers: {
      ...apiConfig.headers,
      Authorization: accessToken,
    },
  };

  const getApiKey = async () => {
    await axios(config)
      .then((response: any) => {
        console.log("response.data.apiKey: ", response.data.apiKey);
        return response.data;
      })
      .catch((error: any) => {
        console.log("ERROR_api_key", error);
      });
  };
  getApiKey();
};

export default postComments;
