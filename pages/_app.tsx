import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { lightTheme } from "../themes";
import { globalStyles } from "../themes/global";
import { ProductContext } from "../context/ProductContext";
import { useFetching } from "../hooks";

function MyApp({ Component, pageProps }: AppProps) {
  const data = useFetching("https://fakestoreapi.com/products");

  return (
    <ProductContext.Provider value={data}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles styles={globalStyles} />
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ProductContext.Provider>
  );
}

export default MyApp;
