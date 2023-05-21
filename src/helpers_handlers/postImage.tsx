import axios from "axios";
import { apiConfig } from "../api_configs";

type PropsT = {
  accessToken: string;
  image?: any;
};

const postImage = async ({ accessToken, image }: PropsT) => {
  const config = {
    ...apiConfig,
    url: "/images",
    method: "post",
    headers: {
      ...apiConfig.headers,
      Authorization: accessToken,
      "Content-Type": "multipart/form-data",
    },
    data: {
      image: image,
    },
  };
  const imageIde = async () =>
    await axios(config)
      .then((response) => {
        return response.data[0].imageId;
      })
      .catch((error) => {
        console.log("ERROR_post_image", error);
      });
  const imageId = imageIde();
  console.log("imageId: ", await imageId);
  return imageId;
};

export default postImage;
