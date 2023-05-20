import axios from "axios";
import { apiConfig } from "../api_configs";

type PropsT = {
  username: string;
  password: string;
};

const tryLogin = async ({ username, password }: PropsT) => {
  const config = {
    ...apiConfig,
    url: "/login",
    method: "post",
    data: {
      username: username,
      password: password,
    },
  };

  const response = await axios(config)
    .then((response: any) => {
      return response;
    })
    .catch((error: any) => {
      return error;
    });
  return response;
};

export default tryLogin;
