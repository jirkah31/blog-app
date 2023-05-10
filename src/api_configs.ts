type PropsT = {
  method: "get" | "post" | "delete" | "patch",
  url: string,
  baseURL: string,
  data: {
    "username": string,
    "password": string,
  }
  headers: {
    'X-API-KEY': string,
    'Authorization'?: string,
  }
}

export const apiConfig: PropsT = {
  method: 'get',
  url: "/",
  baseURL: 'https://fullstack.exercise.applifting.cz',
  data: {
    "username": "Jirka",
    "password": "12345"
  },
  headers: {
    "X-API-KEY": "f6802748-3e4c-4e86-8a53-2a38ef8f5a9b"
  },
}
