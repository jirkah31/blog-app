import axios, { AxiosRequestConfig } from "axios";
import { apiConfig } from "../api_configs";

const postTenant = () => {
  const config: AxiosRequestConfig = {
    ...apiConfig,
    url: "/tenants",
    method: "post",
    headers: {
      ...apiConfig.headers,
      // 'Authorization': accessToken,
    },
  };

  const getApiKey = async () => {
    await axios(config)
      .then((response) => {
        console.log("response.data.apiKey: ", response.data.apiKey);
        return response.data;
      })
      .catch((error) => {
        console.log("ERROR_api_key", error);
      });
  };
  getApiKey();
};

export default postTenant;
