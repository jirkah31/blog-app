import axios, { AxiosError, AxiosResponse } from "axios";
import { apiConfig } from "../api_configs";

type PropsT = {
  accessToken: string;
  image?: any;
};

const postImage = async ({ accessToken, image }: PropsT): Promise<string> => {
  const data = new FormData();
  data.append("image", image);

  const getImageId = () =>
    axios
      .post("https://fullstack.exercise.applifting.cz/images", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          ...apiConfig.headers,
          Authorization: accessToken,
        },
      })
      .then((response: AxiosResponse) => {
        return response.data[0].imageId;
      })
      .catch((error) =>
        console.log("error image: ", error instanceof AxiosError)
      );

  const imageId = await getImageId();

  return imageId;

  // const config: AxiosRequestConfig = {
  //   ...apiConfig,
  //   url: "/images",
  //   method: "post",
  //   headers: {
  //     ...apiConfig.headers,
  //     Authorization: accessToken,
  //     "Content-Type": "multipart/form-data",
  //   },
  //   data,
  // };
  // console.log("image cnfig: ", config);
  // const imageIde = async () =>
  //   await axios(config)
  //     .then((response) => {
  //       return response.data[0].imageId;
  //     })
  //     .catch((error) => {
  //       console.log("ERROR_post_image", error);
  //     });
  // const imageId = imageIde();
  // console.log("imageId: ", await imageId);
  // return imageId;
};

export default postImage;
