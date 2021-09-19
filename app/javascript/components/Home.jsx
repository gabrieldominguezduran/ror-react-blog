import React, { useState, useEffect } from "react";
import Listing from "./Listing";
import Form from "./Form";

export default function Home() {
  const [articles, setArticles] = useState([]);

  const [showArticles, setShowArticles] = useState(false);
  const [createArticles, setCreateArticles] = useState(false);

  useEffect(() => {
    const url = "/load_articles.json";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  let mainImg = (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1546074177-ffdda98d214f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=500&q=80"
            className="d-block w-100 h-75"
            alt="Read more imagen"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="container">
      <h1 className="display-1 text-center m-5">Blog</h1>
      <div className="container p-3">
        <div
          className={
            createArticles
              ? "d-flex justify-content-end"
              : "d-flex justify-content-between"
          }
        >
          {!createArticles ? (
            <button
              type="button"
              className="btn btn-dark mb-2"
              onClick={() => setShowArticles(!showArticles)}
            >
              {showArticles ? "Hide" : "Show"} posts
            </button>
          ) : null}

          <button
            type="button"
            className="btn btn-dark mb-2"
            onClick={() => setCreateArticles(!createArticles)}
          >
            {createArticles ? "Back to posts" : "Create a post"}
          </button>
        </div>
        {createArticles ? (
          <Form createArticles={createArticles} setArticles={setArticles} />
        ) : showArticles ? (
          <Listing articles={articles} />
        ) : (
          mainImg
        )}
      </div>
    </div>
  );
}
