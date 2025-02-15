import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'
function Error() {
  let navigate = useNavigate();

  const error = useRouteError();
  return (
    <>
      {error? <p>{error.data}</p> : <p>Something went wrong!</p>}
      <button onClick={(e) => navigate("/")}>Go to home</button>
    </>
  );
}
export default Error;