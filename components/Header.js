import React from "react";
import styles from "../styles/Header.module.css";
import Search from "./SearchBar";
import Title from "./Title";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  faCartShopping,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Header() {
  return (
    <div className={styles.container}>
      <Title />
       <div className={styles.titleContainer}>
        <p className={styles.titles}>Categories</p>
        </div>
        <div className={styles.titleContainer}>
         <p className={styles.titles}>Brands</p>
        </div>
      <Search placeholder='Search any'/>
      <FontAwesomeIcon  className={styles.cart} icon={faCartShopping} />
    </div>
  );
}

export default Header;
