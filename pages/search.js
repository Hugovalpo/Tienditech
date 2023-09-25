import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import styles from '../styles/Search.module.css';
import ArticleCard from "../components/ArticleCard";

function search() {
  const router = useRouter();

  const [articles, setArticles] = useState([]);
  const [articlesCards, setArticlesCards] = useState(<></>)
  const [resultFound, setResultFound] = useState(undefined);

  // searchData function executed upon loading the page
 
  async function searchData() {
    if (router.query.type === 'categories') {
        console.log('categorias', router.query.type)
        console.log('parametro' , router.query.parameter)
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/articles/${router.query.parameter}`);
      const request = await res.json();
        console.log(request)
        setArticles(request.typeResult);
        setResultFound(request.result);
    } else {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/articles/search/${router.query.parameter}`);
      const request = await res.json();
      console.log(request)
      setArticles(request.searchResult);
      setResultFound(request.result);
      // Buscar artículos y luego asignar los resultados de la búsqueda a "articles"
    }
   
  }

  useEffect(() => {
    // execute searchData function once upon loading the page
        searchData();
  }, [router.query.parameter]);

  // once articles finded, display results on the page
  useEffect(() => {
    // if ,  for not change articlesCards if articles is undefined
    if(articles){
     setArticlesCards(<ArticleCard articles={articles} />);
    }
  }, [articles]);

// result function, which returns one of these 3 possibilities

  const spinner = (
    <div className={styles.spinner}>
      <CircularProgress size={100} style={{ color: "#019521" }}/>
    </div>
  );

  const noResultsMessage = (
    <p className={styles.spinner}>No results were found.</p>
  );

  const result = () => {
    if (resultFound === undefined)
      return spinner; // still waiting for data: return spinner
    else if (resultFound === false)
      return noResultsMessage; // no results found: return "no results found" message
    else if (resultFound === true) return articlesCards; // result found: return productCards
  };
  
  console.log("articulos", articles)

  return (
    <>
    <div className={styles.pageWrap}>
      <Header />
      <div className={styles.container}>
      {result()}
      </div>
      <Footer />
    </div>
    </>
  );
}

export default search;
