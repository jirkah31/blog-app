import { AxiosInstance, PathsT } from "../api/api_configs";

type PropsT = {
  accessToken: string;
  image: string;
};

const postImage = ({ accessToken, image }: PropsT) => {
  const data = new FormData();
  data.append("image", image);

  const imageIde = () =>
    AxiosInstance.post(
      PathsT.ImagesPathT,
      { data },
      {
        headers: {
          Authorization: accessToken,
          "Content-Type": "multipart/form-data",
        },
      },
    )
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
