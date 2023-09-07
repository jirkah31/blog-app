import { AxiosInstance } from "../api/api_configs";
import { errorToast } from "../toasts/toasts";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { PathsT } from "../api/paths";

type ArticlePropsT = {
  articleId?: string;
};

const useArticle = ({ articleId }: ArticlePropsT) => {
  const navigate = useNavigate();

  return useQuery({
    queryKey: ["article", articleId],
    queryFn: () =>
      AxiosInstance.get(`${PathsT.ArticlesPathT}/${articleId}`)
        .catch((error) => {
          navigate(PathsT.HomePathT)
          errorToast("Articles loading fails!");
          return console.error("Error: ", error)
        })
  });
};

export default useArticle;
