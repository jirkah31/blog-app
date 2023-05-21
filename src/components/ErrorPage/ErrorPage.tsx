import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error: unknown = useRouteError()
  const errorMessage = (error as { statusText?: string })?.statusText  || (error as Error)?.message

  return (
    <>
    <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </>
  )
}

export default ErrorPage
