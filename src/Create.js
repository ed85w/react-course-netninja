import React from 'react';
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  //pending state for button on form submit
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    // prevent page refresh 
    e.preventDefault();

    const blog = {title, body, author}; //id is automatically added by JSON Server!
    
    console.log(blog);
    
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(blog)                     
    }).then( () => {
      console.log("new blog added");
      setIsPending(false);
      history.push('/'); //redirect to homepage
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}  //when user types into form update 'title' with the value user has entered
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>

        {/* different button shows while pending */}
        { !isPending && <button>Add Blog</button> }
        { isPending && <button disabled >Adding Blog...</button> }

        <p> {title}</p>
      </form>
    </div>
  );
}
 
export default Create;