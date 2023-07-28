import axios from "axios";
import { apiConfig } from "../api_configs";
import { RequestConfigT } from "../api_configs";
import { PathsT } from "../paths";

type PropsT = {
  accessToken: string;
  image?: any;
};

const postImage = async ({ accessToken, image }: PropsT) => {
  const data = new FormData();
  data.append("image", image);

  const config: RequestConfigT = {
    ...apiConfig,
    url: PathsT.ImagesPathT,
    method: "post",
    headers: {
      ...apiConfig.headers,
      Authorization: accessToken,
      "Content-Type": "multipart/form-data",
    },
    data,
  };

  const imageIde = async () =>
    await axios(config)
      .then((response) => {
        return response.data[0].imageId;
      })
      .catch((error) => {
        console.error("ERROR_post_image", error);
      });
  const imageId = imageIde();

  return imageId;
};

export default postImage;
