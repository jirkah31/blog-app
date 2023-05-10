import { useEffect, useState} from 'react'
import axios from 'axios'
import { apiConfig } from '../api_configs'

export const useAccessToken = () => {
  const [accessToken, setAccessToken] = useState("")

  useEffect(() => {
    const apiLoginConfig = {
      ...apiConfig,
      method: "post",
      url: "/login"
     }

    const getLogin = async () => {
      await axios(apiLoginConfig)
      .then((response: any) => {
        setAccessToken(response.data.access_token)
        return response.data
      })
      .catch((error: any) => {
        console.log("ERROR_login" , error);
      });
    }
    getLogin()

    },[])
    return {accessToken}
  }

  //  - - - generating for api key token - - -
  //  const myApiKey = "80e2c800-b95a-41cb-9ffe-fcb7988a391d"; // old api key token

    // const [apiKey, setApiKey] = useState("")
    // const urlTenant = 'https://fullstack.exercise.applifting.cz/tenants'
    // useEffect(() => {
      //   const apiKeyConfig = {
        //     method: 'post',
  //     url: urlTenant,
  //     data: {
    //       "name": userName,
    //       "password": userPassword
    //       }
    //     }

    //   const getApiKey = async () => {
  //     await axios(apiKeyConfig)
  //     .then((response: any) => {
  //       setApiKey(response.data.apiKey)
  //       console.log('response.data.apiKey: ', response.data.apiKey)
  //       return response.data
  //     })
  //     .catch((error: any) => {
  //       console.log("ERROR_api_key" , error);
  //     });
  //   }
  //   getApiKey()

  // }, [])
