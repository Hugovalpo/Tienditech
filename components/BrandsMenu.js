//import styles from "../styles/BrandsPopover.module.css"

import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function BrandsMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
     const open = Boolean(anchorEl);
     const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Brands
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Asus</MenuItem>
        <MenuItem onClick={handleClose}>Samsung</MenuItem>
        <MenuItem onClick={handleClose}>Lenovo</MenuItem>
      </Menu>
    </div>
  )
}

export default BrandsMenu