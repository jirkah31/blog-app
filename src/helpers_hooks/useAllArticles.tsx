import axios from "axios";
import { useState, useEffect } from "react";
import { apiConfig } from "../api_configs";

const useAllArticles = (accessToken: string | null) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const allArticlesConfig = {
      ...apiConfig,
      url: "/articles",
      headers: {
        ...apiConfig.headers,
        Authorization: accessToken,
        undefined,
      },
    };
    const getAllArticles = async (config: any) => {
      await axios(config)
        .then((response: any) => {
          setArticles(response.data.items);
        })
        .catch((error: any) => {
          console.log("ERROR_articles", error);
        });
    };
    getAllArticles(allArticlesConfig);
  }, [accessToken]);

  return articles;
};

export default useAllArticles;
