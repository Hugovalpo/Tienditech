import React from "react";
import styles from "../styles/ArticleCard.module.css";
import { useRouter } from "next/router";


function ArticleCard(props) {
  const router = useRouter();
  const articles = props.articles;

  function toArticlePage(article) {
    console.log("to article page",article);
    router.push({
      pathname: "./article",
      query:  article ,
    });
  }


  // maps each article
  const articlesMap = articles.map((article, i) => {

    return (
      <div className={styles.card} key={i}>
        <div className={styles?.cardInfo} onClick={() => toArticlePage(article)}>
          <img className={styles.image} src={article?.img[0]} />
          <p className={styles.brand}>{article?.brand}</p>
          <p className={styles.model}>{article?.model}</p>
          <p className={styles.price}>{article?.price} €</p>
        </div>
      </div>
    );
  });

  return <div className={styles.container}>{articlesMap}</div>;
}

export default ArticleCard;
