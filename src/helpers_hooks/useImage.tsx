import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import { apiConfig } from "../api_configs";

type ArticleType = {
  articleId: string;
  title: string;
  perex: string;
  createdAt: string;
  imageId: string;
  lastUpdatedAt: string;
};

const useImage = (
  accessToken: string // imageId?: string
) => {
  const [image, setImage] = useState<ArticleType>({
    articleId: "",
    title: "",
    perex: "",
    createdAt: "",
    imageId: "",
    lastUpdatedAt: "",
  });

  const imageId = "c80b11ec-d38d-4530-bbe9-c018d18a3fb8";

  useEffect(() => {
    const url = `/image/${imageId}`;
    const method = "get";
    const recentArticleConfig = {
      ...apiConfig,
      url,
      method,
      headers: {
        ...apiConfig.headers,
        Authorization: accessToken,
      },
    };

    const getArticle = async (config: AxiosRequestConfig) => {
      await axios(config)
        .then((response) => {
          setImage(response.data);
          console.log("responseIMAGE: ", response);
        })
        .catch((error) => {
          console.log("ERROR_article", error);
        });
    };
    getArticle(recentArticleConfig);
  }, [accessToken, imageId]);

  return image;
};

export default useImage;
