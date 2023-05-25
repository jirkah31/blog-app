import { useOutletContext } from "react-router-dom";

type ContextType = {
  isLoddegIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  accessToken: string;
  isDarkMode: boolean;
};

const useRouterContext = () => {
  return useOutletContext<ContextType>();
};

export default useRouterContext;
