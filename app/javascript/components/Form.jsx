import React, { useState, useEffect } from "react";

export default function Form(props) {
  const [post, setPost] = useState({
    author: "",
    title: "",
    text: "",
  });

  const [notValid, setNotValid] = useState(null);

  const onChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setPost({
      ...post,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (post.author !== "" && post.title !== "" && post.text !== "") {
      console.log(post);
      setNotValid(false);
      const data = { post };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      fetch("/create_articles", requestOptions)
        .then((response) => response.json())
        .then((res) => console.log(res));

      setPost({
        author: "",
        title: "",
        text: "",
      });
    } else {
      setNotValid(true);
    }
  };
  return (
    <form action="post">
      {notValid ? (
        <p className="display-5 text-danger">Please fill al the fields</p>
      ) : null}
      <div className="mb-3 mt-3">
        <label htmlFor="author" className="form-label display-5">
          Posted By
        </label>
        <input
          type="text"
          className="form-control"
          id="author"
          name="author"
          value={post.author}
          onChange={onChangeHandler}
          required
          placeholder="Author name"
        />
        <label htmlFor="title" className="form-label display-5">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          onChange={onChangeHandler}
          required
          value={post.title}
          placeholder="Post title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="post" className="form-label display-5">
          Post
        </label>
        <textarea
          className="form-control"
          id="text"
          name="text"
          rows="6"
          value={post.text}
          onChange={onChangeHandler}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-dark" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
