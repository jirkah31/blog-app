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

const useArticle = (articleId?: string) => {
  const {accessToken} = useAccessToken()
  const [article, setArticle] = useState<ArticleType>({
    articleId: "",
    title: "",
    perex: "",
    createdAt: "",
    imageId: "",
    lastUpdatedAt:"",
  })

   useEffect(() => {
    const url = `/articles/${articleId}`
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
        setArticle(response.data)
        })
       .catch((error: any) => {
         console.log("ERROR_article" , error);
       });
     }
     getArticle(recentArticleConfig)
   },[accessToken, articleId])

   return article
}

export default useArticle
