import axios, { AxiosError, AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { apiConfig } from "../api_configs";
import { useAppSelector } from "./reduxHooks";

export interface ArticleType {
  articleId: string;
  title: string;
  perex: string;
  createdAt: string;
}

const useAllArticles = () => {
  const { accessToken } = useAppSelector((state) => state.accessToken.value);
  const [articles, setArticles] = useState<ArticleType[]>([]);

  const getAllArticles = async () => {
    const allArticlesConfig = {
      ...apiConfig,
      url: "/articles",
      headers: {
        ...apiConfig.headers,
        Authorization: accessToken,
      },
    };
    await axios(allArticlesConfig)
      .then((response: AxiosResponse) => {
        setArticles(response.data.items);
      })
      .catch((error) => {
        console.log("ERROR_articles", error instanceof AxiosError);
      });
  };

  useEffect(() => {
    getAllArticles();
  }, []);

  return { articles, refetch: getAllArticles };
};

export default useAllArticles;
