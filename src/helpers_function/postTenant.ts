import { AxiosInstance, PathsT } from "../api/api_configs";

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
