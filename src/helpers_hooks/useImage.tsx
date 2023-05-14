import axios from "axios"
import { useState, useEffect } from "react"
import { apiConfig } from "../api_configs"
import { useAccessToken } from "./useAccessToken"

type ArticleType = {
  articleId: string,
  title: string,
  perex: string,
  createdAt: string,
  imageId: string,
  lastUpdatedAt: string,
}

const useImage = (
  // imageId?: string
  ) => {
  const {accessToken} = useAccessToken()
  const [image, setImage] = useState<ArticleType>({
    articleId: "",
    title: "",
    perex: "",
    createdAt: "",
    imageId: "",
    lastUpdatedAt:"",
  })

  const imageId = "bb85e564-a2bb-4b31-8f68-59bc60ed5429"

   useEffect(() => {
    const url = `/image/${imageId}`
    const method = "get"
    const recentArticleConfig = {
      ...apiConfig,
      url,
      method,
      headers:{
        ...apiConfig.headers,
        'Authorization': accessToken
      }
    }

       const getArticle = async (config: any) => {
       await axios(config)
       .then((response: any) => {
        setImage(response.data)
        console.log('responseIMAGE: ', response)
        })
       .catch((error: any) => {
         console.log("ERROR_article" , error);
       });
     }
     getArticle(recentArticleConfig)
   },[accessToken, imageId])

   return image
}

export default useImage
