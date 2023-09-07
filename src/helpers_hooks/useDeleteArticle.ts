import { AxiosInstance } from "../api/api_configs";
import { PathsT } from "../api/paths";
import { successToast, errorToast } from "../toasts/toasts";
import { useMutation } from "@tanstack/react-query";

interface DeleteArticleT {
  articleId: string;
  accessToken: string;
}

const useDeleteArticle = (refetchArticles: () => void) => {
  return useMutation({
    mutationFn: ({ articleId, accessToken }: DeleteArticleT) =>
      AxiosInstance.delete(`${PathsT.ArticlesPathT}/${articleId}`, {
        headers: { Authorization: accessToken },
      }),

    onSuccess: () => {
      refetchArticles();
      successToast("Deletion success!");
    },
    onError: () => errorToast("Deletion fail!"),
  });
};

export default useDeleteArticle;
