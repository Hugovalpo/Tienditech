import React from "react";
import styles from "../styles/Slideshow.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Slideshow() {
  return (
    <main className={styles.main}>
      <Carousel
        className={styles.carousel}
        autoPlay={true} // enables autoplay
        interval="4000" // how long before showing next slide
        transitionTime="700" // how long is the animation
        infiniteLoop={true} // loops back to first image after reaching the last one
        showStatus={false} // hides "1 of 3" in the corner
        showThumbs={false} // hides thumbnails
        swipeable={true} // allows user to drag images with the mouse (default: true)
        emulateTouch={true} // enables swipe on non-touch screens
        stopOnHover={false} // stops slideshow on hover
        useKeyboardArrows={true} // enables user to use keyboard arrows
        // onClickItem={(index) => clickBanner(index)}
      >
        <img className={styles.imgcarousel} src="/slideshow/slideshow0.png" />
        <img className={styles.imgcarousel} src="/slideshow/slideshow1.jpeg" />
        <img className={styles.imgcarousel} src="/slideshow/slideshow2.png" />
      </Carousel>
    </main>
  );
}

export default Slideshow;
