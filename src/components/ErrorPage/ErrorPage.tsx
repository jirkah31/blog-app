import { useRouteError } from 'react-router-dom'

type ErrorType = {
  data: string,
    message: string,
    stack: string,
  internal: boolean,
  status: number,
  statusText: string,
}

const ErrorPage = () => {
  const error: any = useRouteError()
  console.log( error )

  return (
    <>
    <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </>
  )
}

export default ErrorPage
