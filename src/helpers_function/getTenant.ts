import { PathsT, AxiosInstance } from "../api/api_configs";

const getTenant = (tenantId: string) => {
  AxiosInstance.get(`${PathsT.TenantPathT}/${tenantId}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("TENANT error", error);
    });
};

export default getTenant;
