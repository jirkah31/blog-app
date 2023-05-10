import axios from "axios"
import { apiConfig } from "../api_configs"

type PropsT = {
  accessToken: string,
  image: any,
}

const postImage = async ({accessToken, image}: PropsT) => {
  console.log('image: ', JSON.stringify(image))

  const config = {
    ...apiConfig,
    method: 'post',
    url: '/images',
    data: {
      ...apiConfig.data,
      "image": image,
    },
    headers: {
      ...apiConfig.headers,
      'Authorization': accessToken,
      'Content-Type': 'multipart/form-data'
    }
  }

  await axios(config)
  .then((response: any) => {
    console.log('responseIMAGE: ', response)
    return response
  })
  .catch((error: any) => {
    console.log("ERROR_post_image" , error);
   });
}


export default postImage
