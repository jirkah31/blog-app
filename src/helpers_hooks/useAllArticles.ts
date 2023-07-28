import axios from "axios";
import { apiConfig } from "../api_configs";
import { useAppSelector } from "./reduxHooks";
import { useQuery } from "@tanstack/react-query";
import { RequestConfigT } from "../api_configs";
import { PathsT } from "../paths";

export interface ArticleType {
  articleId: string;
  title: string;
  perex: string;
  createdAt: string;
  imageId: string;
  lastUpdatedAt: string;
  comments?: any; //dotypovat jak se mi povede implementovat comment functionality
}

const useAllArticles = () => {
  const { accessToken } = useAppSelector((state) => state.accessToken.value);
  const allArticlesConfig: RequestConfigT = {
    ...apiConfig,
    url: PathsT.ArticlesPathT,
    headers: {
      ...apiConfig.headers,
      Authorization: accessToken,
    },
  };

  const query = useQuery({
    queryKey: ["articles"],
    queryFn: () => {
      return axios(allArticlesConfig).catch((error) => console.error("Error: ", error)
      )
    },
  });

  return { query };
};

export default useAllArticles;
