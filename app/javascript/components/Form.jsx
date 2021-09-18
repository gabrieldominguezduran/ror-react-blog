import React, { useState, useEffect } from "react";

export default function Form(props) {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const onAuthorNameChange = (e) => setTitle(e.target.value);
  const onTitleChange = (e) => setTitle(e.target.value);
  const onBodyChange = (e) => setBody(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { author, text, title };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch("/create_article", requestOptions)
      .then((response) => response.json())
      .then((res) => console.log(res));
  };
  return (
    <form action="post">
      <div className="mb-3">
        <label for="author" class="form-label">
          Post author
        </label>
        <input
          type="text"
          className="form-control"
          id="author"
          value={author}
          onChange={onAuthorNameChange}
          required
          placeholder="Author name"
        />
        <label for="title" class="form-label">
          Post title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          onChange={onBodyChange}
          required
          value={title}
          placeholder="Post title"
        />
      </div>
      <div class="mb-3">
        <label for="post" class="form-label">
          Post
        </label>
        <textarea
          className="form-control"
          id="post"
          rows="6"
          value={text}
          onChange={onTitleChange}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-dark" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
