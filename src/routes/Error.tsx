import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <p>Oops!</p>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{error.statusText || error.error?.message}</p>
      </div>
    );
  }
}
