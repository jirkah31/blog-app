import axios from "axios";
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

    const getArticle = async (config: any) => {
      await axios(config)
        .then((response: any) => {
          console.log('response_ARTICLE: ', response)
          setArticle(response.data);
        })
        .catch((error: any) => {
          console.log("ERROR_article", error);
        });
    };
    getArticle(recentArticleConfig);
  }, [articleId]);

  return article;
};

export default useArticle;
