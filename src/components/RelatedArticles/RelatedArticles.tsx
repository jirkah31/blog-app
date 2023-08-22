import React from "react";
import styles from "./RelatedArticles.module.scss";

//not finish yet

function RelatedArticles() {
  const RelatedArticle = () => {
    return (
      <div className="preview">
        <h3>How much food Should Cat eat?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          earum, ratione assumenda consectetur facere quod ...
        </p>
      </div>
    );
  };

  return (
    <div className={styles.relatedArticle}>
      <h2>Related articles</h2>
      {/* bylo by mapováno přes map methodu */}
      <RelatedArticle />
      <RelatedArticle />
      <RelatedArticle />
      <RelatedArticle />
    </div>
  );
}

export default RelatedArticles;
