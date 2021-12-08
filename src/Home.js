import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {

 const { data, isLoading, error } = useFetch('http://localhost:8000/blogs');


  return ( 
    <div className="home">
      {/* outputs a div if isLoading = true */}
      { isLoading && <div>Loading...</div> }

      { error && <div> {error} </div> }

      {/* '{blogs && ... }' required to allow for fetch of data from 'api' (check if data exists) */}
      {data &&  <BlogList blogs={ data } title="this is the title!!!" />}
    </div>
   );
}
 
export default Home;