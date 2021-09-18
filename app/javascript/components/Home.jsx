import React, { useState, useEffect } from "react";

export default function Home() {
  const [articles, setArticles] = useState([]);

  const [showArticles, setShowArticles] = useState(false);

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
  let articleCard = (articles || []).map((ar) => {
    return (
      <div key={ar.id} className="card mb-4 p-2">
        <div className="card-body">
          <h5 className="card-title">{ar.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{ar.author}</h6>
          <p className="card-text">{ar.text}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <h1 className="display-1 text-center m-5">Blog</h1>
      <div className="container p-3">
        <button
          type="button"
          className="btn btn-dark mb-2"
          onClick={() => setShowArticles(!showArticles)}
        >
          {showArticles ? "Hide" : "Show"} Posts
        </button>
        {showArticles ? articleCard : mainImg}
      </div>
    </div>
  );
}
