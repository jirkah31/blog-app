import { AxiosInstance } from "../api/api_configs";
import { useQuery } from "@tanstack/react-query";
import { errorToast } from "../toasts/toasts";
import { PathsT } from "../api/paths";

const useImage = (imageId: string) => {
  return useQuery({
    queryKey: ["Image", imageId],
    queryFn: () =>
      AxiosInstance.get(`${PathsT.ImagesPathT}/${imageId}`, {
        responseType: "arraybuffer",
      }).catch((error) => {
        errorToast("Article image error!");
        console.error("ERROR: ", error);
      }),
    enabled: !!imageId,
  });
};

export default useImage;
