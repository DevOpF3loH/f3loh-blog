import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Create() {
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('Romance');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog)
    }).then(() => {
      setIsPending(false);
      history.push('/');
    })

  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <select value={title}
        onChange={(e) => setTitle(e.target.value)}>
          <option value="Romance">Romance</option>
          <option value="Horror">Horror</option>
          <option value="Drama">Drama</option>
          <option value="Mystery">Mystery</option>
          <option value="Historical">Historical</option>
          <option value="Descriptive">Descriptive</option>
          <option value="Thriller">Thriller</option>
          <option value="Comedy">Comedy</option>
          <option value="Descriptive">Descriptive</option>
        </select>
        <label>Blog body:</label>
        <textarea required
        value={body}
        onChange={(e) => setBody(e.target.value)}></textarea>
        <label>Blog author:</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
}

export default Create;
