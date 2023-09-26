import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShippingFast } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "../styles/FreeShipping.module.css";

function FreeShipping() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <Typography
          className={styles.title}
          sx={{
            fontSize: "26px",
            margin: "10px 0px 50px 24px",
            fontWeight: "400",
            color:'#2e3436',
          }}
        >
          Free Shipping in France
          <FontAwesomeIcon icon={faShippingFast} style={{ color:'#2e3436', marginLeft:'10px' }} />
        </Typography>
      </div>
      <div className={styles.imageWraper}>
        <img className={styles.map} src="france.svg" alt="map" />
      </div>
    </div>
  );
}

export default FreeShipping;
