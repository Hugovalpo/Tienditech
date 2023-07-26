import Header from "../components/Header";
import styles from "../styles/CartPage.module.css";
//import CartCard from "../components/CartCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

//// functions redux
import { useDispatch, useSelector } from "react-redux";
import { addArticle } from "../reducers/cart";
import { removeArticle } from "../reducers/cart";

const TAX_RATE = 0.2;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

// function createRow(desc, qty, unit) {
//   const price = priceRow(qty, unit);
//   return { desc, qty, unit, price };
// }

function subtotal(items) {
  return items.reduce((sum, n) => sum + n.quantity * n.price, 0);
}

// const rows = [
//   createRow('perro', 100, 100.99),
//   createRow("Paperclips (Box)", 100, 1.15),
//   createRow("Paper (Case)", 10, 45.99),
//   createRow("Waste Basket", 2, 17.99),
// ];

export default function cartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);

  const removeCardHandler = (i) => {
    dispatch(removeArticle(i));
  };

  const updateCardHandler = (item, qty) => {
    const quantity = Number(qty);
    dispatch(addArticle({ ...item, quantity }));
  };

  const rows = cart;
  console.log("valor de rows", rows);

  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.container}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 200 }} aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={4}>
                    Details
                  </TableCell>
                  <TableCell>Price</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Product</TableCell>
                  <TableCell align="right">Qty.</TableCell>
                  <TableCell align="right">Unit Price</TableCell>
                  <TableCell align="right">Sum</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow key={row.label}>
                    <TableCell>
                      <img
                        src={row.img[0]}
                        alt={row.label}
                        style={{
                          width: "auto",
                          height: "50px",
                          margin: "auto",
                        }}
                      />
                    </TableCell>
                    <TableCell>{row.label}</TableCell>
                    <TableCell align="right">
                      <select
                        value={row.quantity}
                        onChange={(e) => updateCardHandler(row, e.target.value)}
                      >
                        <option key={1} value={1}>
                          {" "}
                          1
                        </option>
                        <option key={2} value={2}>
                          {" "}
                          2
                        </option>
                        <option key={3} value={3}>
                          {" "}
                          3
                        </option>
                        <option key={4} value={4}>
                          {" "}
                          4
                        </option>
                        <option key={5} value={5}>
                          {" "}
                          5
                        </option>
                        <option key={6} value={6}>
                          {" "}
                          6
                        </option>
                        <option key={7} value={7}>
                          {" "}
                          7
                        </option>
                        <option key={8} value={8}>
                          {" "}
                          8
                        </option>
                        <option key={9} value={9}>
                          {" "}
                          9
                        </option>
                        <option key={10} value={10}>
                          {" "}
                          10
                        </option>
                      </select>
                    </TableCell>
                    <TableCell align="right">{row.price} €</TableCell>
                    <TableCell align="right">
                      {ccyFormat(priceRow(row.quantity, row.price))}
                    </TableCell>
                    <TableCell>
                      <FontAwesomeIcon
                        icon={faCircleXmark}
                        className={styles.xdelete}
                        onClick={() => removeCardHandler(i)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell rowSpan={2} />
                  <TableCell colSpan={3} align="right">
                    TOTAL
                  </TableCell>
                  <TableCell align="right">
                    {ccyFormat(invoiceSubtotal)} €
                  </TableCell>
                </TableRow>
                {/* <TableRow>
                  <TableCell>Tax</TableCell>
                  <TableCell align="left">{`${(TAX_RATE * 100).toFixed(
                    0
                  )} %`}</TableCell>
                  <TableCell align="left">{ccyFormat(invoiceTaxes)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell align="left">{ccyFormat(invoiceTotal)}</TableCell>
                </TableRow> */}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

// export default function cartReview() {

//   return (
//     <>
//       <Header />
//       {/* <CartCard /> */}
//     </>
//   );
// }
