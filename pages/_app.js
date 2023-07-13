import "../styles/globals.css";
import Head from "next/head";

// redux imports
import { Provider } from "react-redux";
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import cart from "../reducers/cart";
import cartTotal from "../reducers/cartTotal";

// redux-persist imports
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";

function App({ Component, pageProps }) {
  const reducers = combineReducers({ cart, cartTotal });
  const persistConfig = { key: "cart", storage };

  const store = configureStore({
    reducer: persistReducer(persistConfig, reducers),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });

  const persistor = persistStore(store);

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Head>
            <title>Tienditech</title>
          </Head>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
