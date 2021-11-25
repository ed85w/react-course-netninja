import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {

  //array destructuring used
  // 'blogs' is var 'setBlogs' is function used to change value of var
  const [blogs, setBlogs] = useState([
    {title: "first blog", body: "bfu uif we iweiuh ehro", author: "mario", id: 1},
    {title: "second blog", body: "poipoi poipoi poi poi poipoi", author: "luigi", id: 2},
    {title: "third blog", body: "wqeqweqwwee weqw eqwee wewqe", author: "yoshi", id: 3},
    {title: "fourth blog", body: "vbnvbn vbnv bn vn bvnbvn e", author: "mario", id: 4}
  ]);


  // 'functions'
  const handleDelete = (id) => {
    // create new array with filter applied
    const newBlogs = blogs.filter(blog => blog.id !== id);
    // use setBlogs to update original 'blogs' variable to the value of the newly created array 
    setBlogs(newBlogs);
  }

  // runs on every render (load, state changed etc)
  useEffect(() => {
    console.log("use effect");
    console.log(blogs);
  })

  return ( 
    <div className="home">
      <BlogList blogs={ blogs } title="this is the title!!!" handleDelete={handleDelete} />
      <BlogList blogs={ blogs.filter((blog) => blog.author === "mario" )} title="Mario's Blogs" />
    </div>
   );
}
 
export default Home;