import React, { useEffect, useState } from "react";
import styles from "../styles/Article.module.css";
import { useRouter } from "next/router";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

// passes the article's data and dispatches the function from the reducer (add)
import { useDispatch, useSelector } from "react-redux";
import { addArticle } from "../reducers/cart";
//import { addArticlePrice } from "../reducers/cartTotal";

function Article() {
  const [Images, setImages] = useState([]);
  const router = useRouter();
  const article = router.query;

  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  useEffect(() => {
    setImages(
      article.img.map((img) => {
        return (
          <div key={img} className={styles.imgContainer}>
            <img className={styles.imgCarousel} src={img} />
          </div>
        );
      })
    );
  }, []);

  // function for add to cart

  function AddtoCart(props) {
    //function for find article already in cart
    const existArticle = cart.find((item) => item.label === props.label);
    // function for increment quantity article in cart
    const quantity = existArticle ? existArticle.quantity + 1 : 1;
    console.log("quantity", quantity);
    dispatch(addArticle({ ...props, quantity })); // add item to cart with his quantity
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
            {Images}
            {/* <div className={styles.imgContainer}>
              <img className={styles.imgCarousel} src={article?.img[0]} />
            </div>
            <div className={styles.imgContainer}>
              <img className={styles.imgCarousel} src={article?.img[1]} />
            </div>
            <div className={styles.imgContainer}>
              <img className={styles.imgCarousel} src={article?.img[2]} />
            </div> */}
          </Carousel>
        </div>
       {/* RIGHT SECTION (description, article info) */}
        <div className={styles.right}>
          <div className={styles.topRight}>
          <div className={styles?.cardInfo}>
            <p className={styles.brand}>{article?.brand}</p>
            <p className={styles.model}>{article?.model}</p>
            <p className={styles.price}>{article?.price} €</p>
            <div className={styles.buttonAnimation}>
              <button
                className={styles.button}
                onClick={() => AddtoCart(article)}
              >
                <FontAwesomeIcon
                  className={styles.cartIcon}
                  icon={faCartPlus}
                />
                Add to Cart
              </button>
            </div>
            <div className={styles.InfoContainer}>
              <p className={styles.description}>{article?.description}</p>
            </div>
          </div>
          </div>  
        </div>
      </div>
    </>
  );
}

export default Article;
