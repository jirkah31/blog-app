import axios from "axios";
import { useState, useEffect } from "react";
import { apiConfig } from "../api_configs";

const useAllArticles = (accessToken: string) => {
  const [articles, setArticles] = useState([]);

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
      .then((response: any) => {
        setArticles(response.data.items);
      })
      .catch((error: any) => {
        console.log("ERROR_articles", error);
      });
  };

  useEffect(() => {
    getAllArticles();
  }, []);

  return { articles, refetch: getAllArticles };
};

export default useAllArticles;
