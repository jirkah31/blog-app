import axios, { AxiosError, AxiosResponse } from "axios";
import { RequestConfigT } from "../api_configs";
import { successToast } from "../toasts/toasts";
import { errorToast } from "../toasts/toasts";
import {
  MutateFunction,
  UseMutationResult,
  useMutation,
} from "@tanstack/react-query";

const useUpdateArticle = (): UseMutationResult<
  AxiosResponse<MutateFunction, RequestConfigT>,
  unknown,
  RequestConfigT,
  unknown
> => {
  return useMutation({
    mutationFn: (config: RequestConfigT) => axios(config),
    onSuccess: () => successToast("Article was updated!"),
    onError: (error) => {
      console.error("ERROR_post_articles", error instanceof AxiosError);
      return errorToast("ERROR happend!");
    },
  });
};

export default useUpdateArticle;
