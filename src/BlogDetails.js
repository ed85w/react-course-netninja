import React from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();

  const { data: blog, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id);

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    })
  }

  const goToEdit = () => {
    history.push(id + '/edit')
  }

  return ( 
    <div className="blog-details">
      { isLoading && <div>Loading...</div> }
      { error && <div> {error} </div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by - { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={ handleDelete }>delete</button>
          <button style={{marginLeft: '10px'}} onClick={ goToEdit }>edit</button>
        </article>
      )}
    </div>
   );
}
 
export default BlogDetails;