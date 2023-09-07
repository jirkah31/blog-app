import { AxiosInstance } from "../api/api_configs";
import { successToast, errorToast } from "../toasts/toasts";
import { PathsT } from "../api/paths";

type PropsT = {
  username: string;
  password: string;
};

const tryLogin = ({
  username,
  password,
}: PropsT) => {

  const response = AxiosInstance.post(PathsT.LoginPathT, {
    username,
    password,
  })
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
