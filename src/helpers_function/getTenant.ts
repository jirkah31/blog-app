import { PathsT } from "../api/paths";
import { AxiosInstance } from "../api/api_configs";

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

  AxiosInstance.get(`${PathsT.TenantPathT}/${tenantId}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("TENANT error", error);
    });
};


export default getTenant;
