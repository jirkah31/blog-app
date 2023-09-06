import axios from "axios";
import { RequestConfigT } from "../api_configs";
import { successToast, errorToast } from "../toasts/toasts";
import { useMutation } from "@tanstack/react-query";


const useDeleteArticle = (refetchArticles: () => void) => {
  return useMutation({
    mutationFn: (configArg: RequestConfigT) => axios(configArg),
    onSuccess: () => {
      refetchArticles()
      console.log("mutation")
      successToast("Deletion success!");
    },
    onError: () => errorToast("Deletion fail!"),
  });
}

export default useDeleteArticle
