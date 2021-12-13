import React from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useFetch from "./useFetch";
import { useState } from "react";

const Edit = () => {
  const { id } = useParams();
  const { data } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  const handleSave = (e) => {
    // prevent page refresh 
    e.preventDefault();

    // const blog = {title, body, author}; //id is automatically added by JSON Server!
    const blog = { 
      title: title === '' ? data.title : title,
      author: author === '' ? data.author : author,
      body: body === '' ? data.body : body
    }

    console.log(blog);
    
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'PUT',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(blog)                     
    }).then( () => {
      console.log("new blog added");
      history.push('/'); //redirect to homepage
    })
  }


  return (
    <div className="create">
      { data && (
        <div>
          <h2>Edit Blog</h2>
          <form onSubmit={handleSave}>
            <label>Blog title:</label>
            <input 
              type="text" 
              required 
              value={title || data.title} //if title is still '' - ie, user hasn't input anything, then use data from api call
              onChange={(e) => setTitle(e.target.value || data.title)}  //when user types into form update 'title' with the value user has entered
            />
            <label>Blog body:</label>
            <textarea
              required
              value={body || data.body}
              onChange={(e) => setBody(e.target.value === '' ? data.body : e.target.value)}
            ></textarea>
            <label>Blog author:</label>
            <select
              value={author || data.author}
              onChange={(e) => setAuthor(e.target.value || data.author)}
            >
              <option value="mario">mario</option>
              <option value="yoshi">yoshi</option>
            </select>

            <button>Save Changes</button>

          </form>
        </div>
      )}
    </div>
  );
}
 
export default Edit;