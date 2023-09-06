import axios from "axios";
import { apiConfig } from "../api_configs";
import { successToast, errorToast } from "../toasts/toasts";
import { RequestConfigT } from "../api_configs";
import { PathsT } from "../paths";

type PropsT = {
  username: string;
  password: string;
};

const tryLogin = ({
  username,
  password,
}: PropsT) => {
  const config: RequestConfigT = {
    ...apiConfig,
    url: PathsT.LoginPathT,
    method: "post",
    data: {
      username: username,
      password: password,
    },
  };

  const response = axios(config)
    .then((response) => {
      successToast(`${username}, you are successfully logged in!`);
      return response;
    })
    .catch((error) => {
      errorToast("Bad username or password!");
      return error;
    });

  return response
};

export default tryLogin;
