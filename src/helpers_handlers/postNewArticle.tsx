import axios from "axios"
import { apiConfig } from "../api_configs"

type PropsT = {
  accessToken: string,
  newArticle: any,
}

const postNewArticle = async ({accessToken, newArticle}: PropsT) => {
  const { title, perex } = newArticle
  const config = {
    ...apiConfig,
    method: 'post',
    url: '/articles',
    data: {
      ...apiConfig.data,
      "title": title,
      "perex": perex,
    },
    headers: {
      ...apiConfig.headers,
      'Authorization': accessToken,
      }
  }

  await axios(config)
  .then((response: any) => {
    return response
  })
  .catch((error: any) => {
    console.log("ERROR_post_articles" , error);
   });
}

export default postNewArticle
