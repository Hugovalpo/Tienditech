import React from "react";
import styles from "../styles/Slideshow.module.css";
import Router from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Slideshow() {
  const clickBanner = (index) => {
    // redirects when clicking on an image
    if (index === 0)
      Router.push({ pathname: "./search", query: { parameter: "Asus" } }); // 1st image, redirects to Asus products
    if (index === 1)
      Router.push({ pathname: "./search", query: { parameter: "samsung" } }); // 2nd image, redirects to samsung products
    if (index === 2)
      Router.push({
        pathname: "./search",
        query: { type: "categories", parameter: "Accessoires" },
      }); // 3rd image, redirects to Accessoires
  };

  return (
    <main className={styles.main}>
      <Carousel
        className={styles.carousel}
        autoPlay={true}
        interval="4000"
        transitionTime="700"
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        swipeable={true}
        emulateTouch={true}
        stopOnHover={false}
        useKeyboardArrows={true}
        onClickItem={(index) => clickBanner(index)}
      >
        <img className={styles.imgcarousel} src="/slideshow/slideshow0.png" />
        <img className={styles.imgcarousel} src="/slideshow/slideshow1.jpeg" />
        <img className={styles.imgcarousel} src="/slideshow/slideshow2.png" />
      </Carousel>
    </main>
  );
}

export default Slideshow;
