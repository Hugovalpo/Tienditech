import React, { useRef } from "react";
import styles from "../styles/Header.module.css";
import Search from "./SearchBar";
import Title from "./Title";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  faCartShopping,
  faCircleXmark,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Popover, Typography } from "@mui/material";
import BrandsPopover from "./BrandsMenu";
import { useRouter } from "next/router";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
//import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import search from "../pages/search";

function Header() {
  const menuRef = useRef(null);

  const router = useRouter();

  //const dispatch = useDispatch();
  //const cart = useSelector((state) => state.cart.value);
  const [anchorEl, setAnchorEl] = useState(null); // menu categories
  const [anchorEl2, setAnchorEl2] = useState(null); // menu brands
  const [anchorEl3, setAnchorEl3] = useState(null); // menu cart

  // displayed if cart is empty
  const cartEmpty = <p className={styles.emptyCart}>Your cart is empty.</p>;

  // opens the popover
  function openPopover(event) {
    console.log(event.currentTarget.textContent);

    // sets the popover's anchor to the cart icon
    if (event.currentTarget.textContent === "Categories") {
      setAnchorEl(event.currentTarget);
    } else if (event.currentTarget.textContent === "Brands") {
      setAnchorEl2(event.currentTarget);
    } else {
      setAnchorEl3(event.currentTarget);
    }
  }

  function closePopover() {
    // sets anchors to null
    setAnchorEl(null);
    setAnchorEl2(null);
    setAnchorEl3(null);
  }

  function navigate(event, type) {
    router.push({
      pathname: "./search",
      query: { parameter: event.currentTarget.textContent, type: type, },
    });
    closePopover();
  }

  return (
    <div className={styles.container}>
      <Title />
      <div className={styles.titleContainer} onClick={openPopover}>
        <p className={styles.titlesButton}>Categories</p>
        <FontAwesomeIcon icon={faCaretDown} className={styles.icon} />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => closePopover()}
      >
        <MenuItem onClick={(event) => navigate(event, "categories")}>
          LAPTOP
        </MenuItem>
        <MenuItem onClick={(event) => navigate(event, "categories")}>Monitor</MenuItem>
        <MenuItem onClick={(event) => navigate(event, "categories")}>Accessoires</MenuItem>
      </Menu>
      <div className={styles.titleContainer} onClick={openPopover}>
        <p className={styles.titleButton}>Brands</p>
        <FontAwesomeIcon icon={faCaretDown} className={styles.icon} />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl2}
        open={Boolean(anchorEl2)}
        onClose={() => closePopover()}
      >
        <MenuItem onClick={(event) => navigate(event, "brands")}>ASUS</MenuItem>
        <MenuItem onClick={(event) => navigate(event, "brands")}>SAMSUNG</MenuItem>
        <MenuItem onClick={(event) => navigate(event, "brands")}>HP</MenuItem>
      </Menu>
      <Search placeholder="Search any" />
      <div className={styles.cartContainer}>
        <FontAwesomeIcon
          className={styles.cart}
          icon={faCartShopping}
          onClick={openPopover}
        />
        <span className={styles.item_total}>0</span>
      </div>
      <Popover
        open={Boolean(anchorEl3)}
        onClose={() => closePopover()}
        anchorEl={anchorEl3}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {" "}
        {cartEmpty}
        {/* {cart.length ? cartArticles : cartEmpty}{" "} */}
        {/* if cart has items, display cartArticles. if cart is empty, display cartEmpty */}
        {/* {cart.length ? subtotalAndOrder : <></>}{" "} */}
        {/* if cart has items, display subtotalAndOrder. if cart is empty, display nothing */}
      </Popover>
    </div>
  );
}

export default Header;
