import axios from "axios";
import { apiConfig } from "../api_configs";

const postTenant = () => {
  const config = {
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
      .then((response: any) => {
        console.log("response.data.apiKey: ", response.data.apiKey);
        return response.data;
      })
      .catch((error: any) => {
        console.log("ERROR_api_key", error);
      });
  };
  getApiKey();
};

export default postTenant;
