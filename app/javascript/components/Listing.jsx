import React, { useState, useEffect } from "react";

export default function Article(props) {
  const [articles, setArticles] = useState(props.articles);

  return articles.map((ar) => (
    <div key={ar.id} className="card mb-4 p-2">
      <div className="card-body">
        <h5 className="card-title">{ar.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{ar.author}</h6>
        <p className="card-text">{ar.text}</p>
      </div>
    </div>
  ));
}
