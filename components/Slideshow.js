import React from "react";
import styles from "../styles/Slideshow.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Slideshow() {
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
      >
        <img className={styles.imgcarousel} src="/slideshow/slideshow0.png" />
        <img className={styles.imgcarousel} src="/slideshow/slideshow1.jpeg" />
        <img className={styles.imgcarousel} src="/slideshow/slideshow2.png" />
      </Carousel>
    </main>
  );
}

export default Slideshow;
