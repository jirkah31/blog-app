import { useOutletContext } from "react-router-dom";

type ContextType = {
  isLoddegIn: boolean;
  setIsLoggedIn: any;
  accessToken: string;
};

const useLoggedIn = () => {
  return useOutletContext<ContextType>();
};

export default useLoggedIn;
