import axios from "axios";
import { useState, useEffect } from "react";
import { apiConfig } from "../api_configs";

const useAllArticles = (accessToken: string) => {
  const [articles, setArticles] = useState([]);

  
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
      console.log('call: ', )
      await axios(config)
        .then((response: any) => {
          setArticles(response.data.items);
        })
        .catch((error: any) => {
          console.log("ERROR_articles", error);
        });
    };
    getAllArticles(allArticlesConfig);
  

  return {
    articles,
    refetch: getAllArticles
  };
};

export default useAllArticles;
