import { useOutletContext } from "react-router-dom";

type ContextType = {
  isLoddegIn: boolean;
  setIsLoggedIn : (value: boolean) => void;
  accessToken: string;
};

const useLoggedIn = () => {
  return useOutletContext<ContextType>();
};

export default useLoggedIn;
