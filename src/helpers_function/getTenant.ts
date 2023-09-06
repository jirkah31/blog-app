import axios from "axios";
import { PathsT } from "../paths";

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

  const url = `${PathsT.TenantPathT}/${tenantId}`;
  const method = "get";
  const config = {
    baseURL: "https://fullstack.exercise.applifting.cz",
    url,
    method,
  };


  axios(config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("TENANT error", error);
    });
};


export default getTenant;
