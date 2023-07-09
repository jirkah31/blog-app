import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import { apiConfig } from "../api_configs";
import { useAppSelector } from "./reduxHooks";

type ArticleType = {
  articleId: string;
  title: string;
  perex: string;
  createdAt: string;
  imageId: string;
  lastUpdatedAt: string;
};

const useImage = () => {
  const { accessToken } = useAppSelector((state) => state.accessToken.value);
  const [image, setImage] = useState<ArticleType>({
    articleId: "",
    title: "",
    perex: "",
    createdAt: "",
    imageId: "",
    lastUpdatedAt: "",
  });

  const imageId = "78cb2668-f2a5-4539-a563-2534a7227791";

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
