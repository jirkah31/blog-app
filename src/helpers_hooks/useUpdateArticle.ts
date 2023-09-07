import { AxiosError } from "axios";
import { AxiosInstance } from "../api/api_configs";
import { successToast } from "../toasts/toasts";
import { errorToast } from "../toasts/toasts";
import { useMutation } from "@tanstack/react-query";
import { PathsT } from "../api/paths";

interface UpdateArticleT {
  articleId: string;
  title: string;
  perex: string;
  accessToken: string;
}

const useUpdateArticle = () => {
  return useMutation({
    mutationFn: ({ articleId, title, perex, accessToken }: UpdateArticleT) =>
      AxiosInstance.patch(
        `${PathsT.ArticlesPathT}/${articleId}`,
        {
          title,
          perex,
        },
        {
          headers: {
            Authorization: accessToken,
          },
        },
      ),
    onSuccess: () => successToast("Article was updated!"),
    onError: (error) => {
      console.error("ERROR_post_articles", error instanceof AxiosError);
      return errorToast("ERROR happend!");
    },
  });
};

export default useUpdateArticle;
