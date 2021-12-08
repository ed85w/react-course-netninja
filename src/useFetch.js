// custom hook
// custom hooks need to start with the word 'use'

import { useState, useEffect } from "react";

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch data from 
    fetch(url)            // cmd to run json server = npx json-server --watch data/db.json --port 8000
    .then(response => {
      // if the response is not ok, throw error 
      if(!response.ok) {
        throw Error("whoopsie!");
      }
      console.log(response)
      // then convert response to json
      return response.json();

    })
    // then set 'data' variable to value of converted response 
    .then(data => {
      setData(data);
      setIsLoading(false);
      setError(null);
    })
    .catch(err => {
      setIsLoading(false); //so user doesn't see loading div
      setError(err.message); 
    })
  }, [url]) //re-run if url changes

  return {data, isLoading, error}
}

export default useFetch;