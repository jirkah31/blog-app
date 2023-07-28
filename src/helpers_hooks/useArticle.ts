import axios from "axios";
import { apiConfig } from "../api_configs";
import { errorToast } from "../toasts/toasts";
import { RequestConfigT } from "../api_configs";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { PathsT } from "../paths";

type PropsT = {
  articleId?: string;
};

const useArticle = ({ articleId }: PropsT) => {
  const navigate = useNavigate();
  const recentArticleConfig: RequestConfigT = {
    ...apiConfig,
    url: `${PathsT.ArticlesPathT}/${articleId}`,
    headers: {
      ...apiConfig.headers,
    },
  };

  const query = useQuery({
    queryKey: ["RecentArticle"],
    queryFn: () => axios(recentArticleConfig).catch((error) => {
      errorToast("Article error!")
      navigate(PathsT.HomePathT)
      console.error("ERROR: ", error)
    })
    ,
  });

  return { query };
};

export default useArticle;
