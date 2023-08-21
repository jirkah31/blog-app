import { MutateFunction, UseMutationResult, useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { RequestConfigT } from "../api_configs";
import { successToast, errorToast } from "../toasts/toasts";

const useDeleteArticle = (): UseMutationResult<
  AxiosResponse<MutateFunction, RequestConfigT>,
  unknown,
  RequestConfigT,
  unknown> => {
  return useMutation({
    mutationFn: (configArg: RequestConfigT) => axios(configArg),
    onSuccess: async () => {
      successToast("Deletion success!");
    },
    onError: () => errorToast("Deletion fail!"),
  });
}

export default useDeleteArticle
