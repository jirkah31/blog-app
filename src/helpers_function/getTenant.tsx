import axios, { AxiosRequestConfig } from "axios";
import { apiConfig } from "../api_configs";

// type ArticleType = {
//   articleId: string;
//   title: string;
//   perex: string;
//   createdAt: string;
//   imageId: string;
//   lastUpdatedAt: string;
// };

const getTenant = (tenantId: string) => {
  // const [article, setArticle] = useState<ArticleType>({
  //   articleId: "",
  //   title: "",
  //   perex: "",
  //   createdAt: "",
  //   imageId: "",
  //   lastUpdatedAt: "",
  // });

  const url = `/tenants/${tenantId}`;
  const method = "get";
  const recentArticleConfig = {
    baseURL: "https://fullstack.exercise.applifting.cz",
    url,
    method,
  };

  const getArticle = async (config: AxiosRequestConfig) => {
    await axios(config)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log("TENANT error", error);
      });
  };
  const tenant = getArticle(recentArticleConfig);

  return tenant;
};

export default getTenant;
