import React, { useEffect, useRef } from "react";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

// redux imports
import { useDispatch, useSelector } from "react-redux";
import { removeArticle } from "../reducers/cart";

function Header() {
  const menuRef = useRef(null);

  const router = useRouter();

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  const [anchorEl, setAnchorEl] = useState(null); // menu categories
  const [anchorEl2, setAnchorEl2] = useState(null); // menu brands
  const [anchorEl3, setAnchorEl3] = useState(null); // menu cart
  const [cartQuantity, setCartQuantity] = useState(null);
  const [cartTotal, setCartTotal] = useState(null);

  console.log("cart with cartArticle", cart);
  // passes the article's index and dispatches the function from the reducer (remove)
  function handleRemoveClick(index) {
    dispatch(removeArticle(index)); // remove article from cart
    //dispatch(removeArticlePrice(props));  // remove article price from cart total
    //if (cart.length === 1) dispatch(resetCartTotal());  // reset cart total to 0
  }

  ////// CART FUNCTIONS ///////////

  useEffect(() => {
    setCartQuantity(cart.reduce((sum, n) => sum + n.quantity, 0));
    setCartTotal(
      cart.reduce((sum, n) => sum + n.quantity * n.price, 0).toFixed(2)
    );
    //setCartQuantity(cart.value.length);
  }, [cart]);

  // displayed if cart is empty
  const cartEmpty = <p className={styles.emptyCart}>Your cart is empty.</p>;

  // displayed if cart has items: maps the articles from the cart
  const cartArticles = cart.map((article, i) => {
    // capitalizes first letter
    const brandFormatted =
      article?.brand.charAt(0).toUpperCase() + article?.brand.slice(1);

    return (
      <div key={i} className={styles.popoverContainer}>
        <div className={styles.popover}>
          <img className={styles.image} src={article.img[0]} />
          <div className={styles.popoverText}>
            <p className={styles.brand}>{brandFormatted}</p>
            <p className={styles.model}>{article.model}</p>
            <p className={styles.price}>qt: {article.quantity}</p>
            <p className={styles.price}>price: {article.price} €</p>
          </div>
        </div>
      </div>
    );
  });

  // displayed if cart has items: subtotal and order button
  const subtotalAndOrder = (
    <Typography className={styles.popoverLast}>
      <Typography>Subtotal: {cartTotal} €</Typography>
      <Link href="./cartPage">
        <button className={styles.button}>Order</button>
      </Link>
    </Typography>
  );

  ////////////////////////////////////////////

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
      query: { parameter: event.currentTarget.textContent, type: type },
    });
    closePopover();
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.headerLeft}>
          <Title />
        </div>
        <div className={styles.headerRight}>
          <div className={styles.titleContainer} onClick={openPopover}>
            <p className={styles.titleButton}>Categories</p>
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
            <MenuItem onClick={(event) => navigate(event, "categories")}>
              Monitor
            </MenuItem>
            <MenuItem onClick={(event) => navigate(event, "categories")}>
              Accessoires
            </MenuItem>
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
            <MenuItem onClick={(event) => navigate(event, "brands")}>
              ASUS
            </MenuItem>
            <MenuItem onClick={(event) => navigate(event, "brands")}>
              SAMSUNG
            </MenuItem>
            <MenuItem onClick={(event) => navigate(event, "brands")}>
              HP
            </MenuItem>
          </Menu>
          <div className={styles.searchContainer}>
          <Search placeholder="Search any" />
          </div>
          <div className={styles.cartContainer}>
            <FontAwesomeIcon
              className={styles.cart}
              icon={faCartShopping}
              onClick={openPopover}
            />
            <span className={styles.item_total}>{cartQuantity}</span>
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
            {/* {cartEmpty} */}
            {cart.length ? cartArticles : cartEmpty}{" "}
            {/* if cart has items, display cartArticles. if cart is empty, display cartEmpty */}
            {cart.length ? subtotalAndOrder : <></>}{" "}
            {/* if cart has items, display subtotalAndOrder. if cart is empty, display nothing */}
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default Header;
