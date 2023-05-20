import axios from "axios";
import { apiConfig } from "../api_configs";

type PropsT = {
  accessToken: string;
  imageId: string;
  newArticle: {
    title: string;
    perex: string;
  };
};

const postNewArticle = async ({ accessToken, newArticle, imageId }: PropsT) => {
  const { title, perex } = newArticle;
  const config = {
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
    .then((response: any) => {
      console.log("responseARTICLE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("ERROR_post_articles", error);
    });
};

export default postNewArticle;
