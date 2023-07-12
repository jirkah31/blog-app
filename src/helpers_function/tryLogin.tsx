import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { apiConfig } from "../api_configs";
import { successToast, errorToast } from "../toasts/toasts";

type PropsT = {
  username: string;
  password: string;
};

const tryLogin = async ({
  username,
  password,
}: PropsT): Promise<AxiosResponse> => {
  const config: AxiosRequestConfig = {
    ...apiConfig,
    url: "/login",
    method: "post",
    data: {
      username: username,
      password: password,
    },
  };

  const response: Promise<AxiosResponse<Response>> = await axios(config)
    .then((response) => {
      successToast(`${username}, you are successfully logged in!`);
      return response;
    })
    .catch((error) => {
      errorToast("Bad username or password!");
      return error;
    });
  console.log("response: ", response);
  return response;
};

export default tryLogin;
