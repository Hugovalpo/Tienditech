// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

// create the initial state, similar to useState()
const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add an article to the cart
    addArticle: (state, action) => {
      const newArticle = action.payload;
      console.log(action.payload);
      const existArticle = state.value.find(
        (article) => article.label === newArticle.label
      );
      // condition for update article if article already exist in cart
      let updatedCartArticles;

      if (existArticle) {
        updatedCartArticles = state.value.map((article) =>
          article.label === newArticle.label ? newArticle : article
        );
      } else {
        //article is saved if doesn't exist in cart.
        updatedCartArticles = [...state.value, newArticle];
      }

      return { ...state, value: updatedCartArticles };
      //state.value.push(action.payload);
    },
    // remove an article from the cart
    removeArticle: (state, action) => {
      // simplified version: takes the index directly from the frontend (cart)
      state.value.splice(action.payload, 1);
    },
    emptyCart: (state, action) => {
      state.value = [];
    },
  },
});

export const { addArticle, removeArticle, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
