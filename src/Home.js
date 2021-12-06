import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {

  //array destructuring used
  // 'blogs' is variable 'setBlogs' is function used to change value of variable, null is initial value
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null);

  // runs on every render (load, state changed etc)
  useEffect(() => {
    // fetch data from 
    fetch('http://localhost:8000/blogs')            // cmd to run json server = npx json-server --watch data/db.json --port 8000
    .then(response => {
      // if the response is not ok, throw error 
      if(!response.ok) {
        throw Error("whoopsie!");
      }
      console.log(response)
      // then convert response to json
      return response.json();

    })
    // then set 'blogs' variable to value of converted response 
    .then(data => {
      setBlogs(data);
      setIsLoading(false);
      setError(null);
    })
    .catch(err => {
      setIsLoading(false); //so user doesn't see loading div
      setError(err.message); 
    })
  }, [])  

  return ( 
    <div className="home">
      {/* outputs a div if isLoading = true */}
      { isLoading && <div>Loading...</div> }

      { error && <div> {error} </div> }

      {/* '{blogs && ... }' required to allow for fetch of data from 'api' (check if data exists) */}
      {blogs &&  <BlogList blogs={ blogs } title="this is the title!!!" />}
    </div>
   );
}
 
export default Home;