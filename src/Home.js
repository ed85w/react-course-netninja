import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {

  //array destructuring used
  // 'blogs' is var 'setBlogs' is function used to change value of var
  const [blogs, setBlogs] = useState(null);

  // runs on every render (load, state changed etc)
  useEffect(() => {
    // fetch data from 
    fetch('http://localhost:8000/blogs')
    // then convert response to json
    .then(response => {
      return response.json();
    })
    // then set 'blogs' variable to value of converted response 
    .then(data => {
      console.log(data);
      setBlogs(data);
    })
  }, [])  

  return ( 
    <div className="home">
      {/* '{blogs && ... }' required to allow for fetch of data from 'api' (check if data exists) */}
      
      {blogs &&  <BlogList blogs={ blogs } title="this is the title!!!" />}
    </div>
   );
}
 
export default Home;