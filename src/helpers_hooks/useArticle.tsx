import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import { apiConfig } from "../api_configs";
import { errorToast } from "../toasts/toasts";

type ArticleType = {
  articleId: string;
  title: string;
  perex: string;
  createdAt: string;
  imageId: string;
  lastUpdatedAt: string;
  comments?: any; //dotypovat jak semi povede implementovat comment functionality
};

type PropsT = {
  articleId?: string;
};

const useArticle = ({ articleId }: PropsT) => {
  const [article, setArticle] = useState<ArticleType>({
    articleId: "",
    title: "",
    perex: "",
    createdAt: "",
    imageId: "",
    lastUpdatedAt: "",
  });

  useEffect(() => {
    const url = `/articles/${articleId}`;
    const method = "get";
    const recentArticleConfig = {
      ...apiConfig,
      url,
      method,
      headers: {
        ...apiConfig.headers,
      },
    };

    const getArticle = async (config: AxiosRequestConfig) => {
      await axios(config)
        .then((response) => {
          setArticle(response.data);
        })
        .catch((error) => {
          errorToast("New article wasn't posted!")
          console.log("ERROR_article", error);
        });
    };
    getArticle(recentArticleConfig);
  }, [articleId]);

  return article;
};

export default useArticle;
