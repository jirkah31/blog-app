import { useMutation } from "@tanstack/react-query";
import { AxiosInstance, PathsT } from "../api/api_configs";

interface PostImageT {
  data: object;
  accessToken: string;
}

const usePostImage = () => {
  const mutation = useMutation({
    mutationFn: ({ accessToken, data }: PostImageT) =>
      AxiosInstance.post(PathsT.ImagesPathT, data, {
        headers: {
          Authorization: accessToken,
          "Content-Type": "multipart/form-data",
        },
      }),
    onError: (error, variables, context) => {
      console.error("error, variables, context: ", error, variables, context);
    },
    onSuccess: (data) => {
      return { data };
    },
  });

  return mutation;
};

export default usePostImage;
