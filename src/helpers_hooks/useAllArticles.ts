import axios from "axios";
import { apiConfig } from "../api_configs";
import { useAppSelector } from "../redux/reduxHooks";
import { useQuery } from "@tanstack/react-query";
import { RequestConfigT } from "../api_configs";
import { PathsT } from "../paths";
import { CommentPropsT } from "../components/Comment/Comment";

export interface ArticleType {
  articleId: string;
  title: string;
  perex: string;
  createdAt: string;
  imageId: string;
  lastUpdatedAt: string;
  comments?: CommentPropsT;
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

  return useQuery({
    queryKey: ["articles"],
    queryFn: () => {
      return axios(allArticlesConfig).catch((error) => console.error("Error: ", error)
      )
    },
  });

};

export default useAllArticles;
