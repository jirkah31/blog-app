import { AxiosInstance } from "../api/api_configs";
import { PathsT } from "../api/paths";

const postTenant = () => {

  AxiosInstance.post(PathsT.TenantPathT)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("ERROR_api_key", error);
    });
};

export default postTenant;
