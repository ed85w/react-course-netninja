import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {

  //array destructuring used
  // 'blogs' is var 'setBlogs' is function used to change value of var
  const [blogs, setBlogs] = useState(null);

  const [isLoading, setIsLoading] = useState(true); 

  // runs on every render (load, state changed etc)
  useEffect(() => {
    // fetch data from 
    fetch('http://localhost:8000/blogs')            // cmd to run json server = npx json-server --watch data/db.json --port 8000
    // then convert response to json
    .then(response => {
      return response.json();
    })
    // then set 'blogs' variable to value of converted response 
    .then(data => {
      console.log(data);
      setBlogs(data);
      setIsLoading(false)
    })
  }, [])  

  return ( 
    <div className="home">
      {/* outputs a div if isLoading = true */}
      { isLoading && <div>Loading...</div> }


      {/* '{blogs && ... }' required to allow for fetch of data from 'api' (check if data exists) */}
      {blogs &&  <BlogList blogs={ blogs } title="this is the title!!!" />}
    </div>
   );
}
 
export default Home;