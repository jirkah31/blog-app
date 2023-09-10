import { useQuery } from "@tanstack/react-query";
import { CommentPropsT } from "../components/Comment/Comment";
import { AxiosInstance, PathsT } from "../api/api_configs";
import { errorToast } from "../toasts/toasts";

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
  return useQuery({
    queryKey: ["articles"],
    queryFn: () =>
      AxiosInstance.get(PathsT.ArticlesPathT).catch((error) => {
        errorToast("Articles loading fails!");
        return console.error("Error: ", error);
      }),
  });
};

export default useAllArticles;
