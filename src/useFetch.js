// custom hook to fetch data from api
// custom hooks need to start with the word 'use'

import { useState, useEffect } from "react";

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    //stops fetch if required (eg user quickly navigates away from page before loaded)
    const abortCont = new AbortController();

    // fetch data from 
    fetch(url, {signal: abortCont.signal})            // cmd to run json server = npx json-server --watch data/db.json --port 8000
    .then(response => {
      // if the response is not ok, throw error 
      if(!response.ok) {
        throw Error("whoopsie!");
      }
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
      if (err.name === 'AbortError') {
        console.log("fetch aborted");
      } else {
        setIsLoading(false); //so user doesn't see loading div
        setError(err.message); 
      }
    })

    return () => abortCont.abort();

  }, [url]) //re-run if url changes

  return {data, isLoading, error}
}

export default useFetch;