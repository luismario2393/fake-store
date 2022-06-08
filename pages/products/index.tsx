import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products";
import { ProductContext } from "../../context";

const ProductsPage = () => {
  const data = useContext(ProductContext);

  return (
    <ShopLayout
      title="Fake-Store - Products"
      pageDescription="Todos los mejores productos de Fake store aquí"
    >
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>

      <Box sx={{ mt: 2 }}>
        <ProductList products={data ?? []} />
      </Box>
    </ShopLayout>
  );
};

export default ProductsPage;
