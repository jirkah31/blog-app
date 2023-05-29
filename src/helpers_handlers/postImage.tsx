import axios from "axios";
import { apiConfig } from "../api_configs";

type PropsT = {
  accessToken: string;
  image?: any;
};

// Tohle tak snadno nepůjde, zkus pogooglit něco jako: axios upload image, axios send image
// Tady je např diskuze na stack overflow: https://stackoverflow.com/questions/39663961/how-do-you-send-images-to-node-js-with-axios
// neměla by k tomu bejt potřeba žádná knihovna, jen využiješ FormData: https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData

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
