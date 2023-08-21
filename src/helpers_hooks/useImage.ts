import axios from "axios";
import { apiConfig } from "../api_configs";
import { RequestConfigT } from "../api_configs";
import { useQuery } from "@tanstack/react-query";
import { errorToast } from "../toasts/toasts";
import { PathsT } from "../paths";

const useImage = (imageId: string) => {
  const imageConfig: RequestConfigT = {
    ...apiConfig,
    url: `${PathsT.ImagesPathT}/${imageId}`,
    headers: {
      ...apiConfig.headers,
    },
    responseType: 'arraybuffer'
  };

  return useQuery({
    queryKey: ["Image", imageId],
    queryFn: async () => await axios(imageConfig).catch((error) => {
      errorToast("Article image error!")
      console.error("ERROR: ", error)
    })
    ,
    enabled: !!imageId,
  },
  );
};

export default useImage;
