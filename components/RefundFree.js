import React from 'react';
import styles from '../styles/RefundFree.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import { Typography } from '@mui/material';

function RefundFree() {
  return (
    <div className={styles.container}>
    <Typography
          className={styles.title}
          sx={{
            fontSize: "26px",
            margin: "10px 0px 50px 24px",
            fontWeight: "400",
            color:'#2e3436'
          }}
        >
          Refund Free
        </Typography>
    <div className={styles.iconContainer}>
      <FontAwesomeIcon icon={faHandHoldingDollar} style={{ fontSize: '30vh', color:'#2e3436' }}/>
    </div>
    </div>
  )
}

export default RefundFree