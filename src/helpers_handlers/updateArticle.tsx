import axios from "axios"
import { apiConfig } from "../api_configs"

type PropsT = {
  articleId?: string,
  accessToken: string,
  editedArticle:{
    title: string,
    perex: string,
  },
}

const updateArticle = async ({articleId, editedArticle, accessToken}: PropsT) => {
  const { title, perex } = editedArticle
  const config = {
    ...apiConfig,
    method: 'patch',
    url: `/articles/${articleId}`,
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

export default updateArticle
