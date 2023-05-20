import axios from "axios";
import { apiConfig } from "../api_configs";

export type DeletePropsT = {
  articleId: string;
  accessToken: string | null;
};

const deleteArticle = async ({ articleId, accessToken }: DeletePropsT) => {
  const config = {
    ...apiConfig,
    method: "delete",
    url: `/articles/${articleId}`,
    headers: {
      ...apiConfig.headers,
      Authorization: accessToken,
    },
  };

  await axios(config)
    .then((response: any) => {
      console.log("responseDELETE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("ERROR_post_articles", error);
    });
};

export default deleteArticle;
