import React, { useEffect } from "react";
import styles from "../styles/Article.module.css";
import { useRouter } from "next/router";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faCircleCheck,
  faTruckFast,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons"

  // passes the article's data and dispatches the function from the reducer (add)
import { useDispatch } from "react-redux";
import { addArticle } from "../reducers/cart";
import { addArticlePrice } from "../reducers/cartTotal";




function Article() {
  const router = useRouter();
  const article = router.query;
  

  

  console.log('info en article' , article);

  function handleAddClick(props) {
    dispatch(addArticle(props)); // add item to cart
    dispatch(addArticlePrice(props)); // add item price to cart total
  }



  return (
    <>
      <div className={styles.main}> 
      <div className={styles.left}>
        <Carousel
        showThumbs={false} // hides thumbnails
        swipeable={true} // allows user to drag images with the mouse (default: true)
        emulateTouch={true} // enables swipe on non-touch screens
        stopOnHover={false} // stops slideshow on hover
        useKeyboardArrows={true} // enables user to use keyboard arrows
        // onClickItem={(index) => clickBanner(index)}
      >
        <div className={styles.imgContainer}>
        <img className={styles.imgcarousel} src={article?.img[0]}/>
          </div> 
          <div className={styles.imgContainer}>
        <img className={styles.imgcarousel} src={article?.img[1]}/>
          </div> 
          <div className={styles.imgContainer}>
        <img className={styles.imgcarousel} src={article?.img[2]}/>
          </div> 
        </Carousel>
      </div>
      <div className={styles.right}>
        <div className={styles?.cardInfo}>
          <p className={styles.brand}>{article?.brand}</p>
          <p className={styles.model}>{article?.model}</p>
          <p className={styles.price}>{article?.price} €</p>
          <div className={styles.buttonAnimation}>
            <button
              className={styles.button}
              onClick={() => AddtoCart(article)}
            >
              <FontAwesomeIcon className={styles.cartIcon} icon={faCartPlus} />
              Add
            </button>
          </div>
          <p className={styles.description}>{article?.description}</p>
        </div>
      </div>
      </div>
    </>
  );
}

export default Article;
