import { useState } from "react";

import "./Articles.css";
import SelectedArticle from "./SelectedArticle";
function Articles({ articles = [] }) {
  const [selectedArticle, setSelectedArticle] = useState({});

  const updateSelectedArticle = (article, key) => {
    console.log("article", article);
    if (key === selectedArticle.key) {
      setSelectedArticle({});
    } else {
      setSelectedArticle({ ...article, key });
    }
  };
  return (
    <div>
      <ul>
        {articles.map((article, key) => {
          return (
            <>
              <li
                onClick={() => updateSelectedArticle(article, key)}
                className="articles-container-item"
                key={key}
              >
                <div className="article-title">
                {article.title}
                </div>
   
         
             
                {selectedArticle?.title === article.title && (
                  <SelectedArticle article={article} key={`${key}-${article.title}`} />
                )}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Articles;
