import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { lightTheme } from "../themes";
import { globalStyles } from "../themes/global";
import { ProductContext } from "../context/ProductContext";
import { useFetching } from "../hooks";
import { useState } from "react";
import { CartContext } from "../context";
import { IProduct } from "../interfaces";

function MyApp({ Component, pageProps }: AppProps) {
  const data = useFetching("https://fakestoreapi.com/products");
  const [cart, setCart] = useState<IProduct[]>([]);

  return (
    <ProductContext.Provider value={data}>
      <CartContext.Provider value={{ cart, setCart }}>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyles styles={globalStyles} />
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default MyApp;
