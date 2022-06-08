import { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

import { ShopLayout } from "../../components/layouts";
import { IProduct } from "../../interfaces";

const ProductDetail = () => {
  const [product, setProduct] = useState<IProduct>();

  const id =
    typeof window !== "undefined" && window.location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <ShopLayout title={`Fake-Store - Product - ${id}`} pageDescription={""}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <img
            src={product?.image}
            alt={product?.title}
            style={{ maxWidth: "100%", objectFit: "contain", height: "750px" }}
          />
        </Grid>

        <Grid item xs={12} sm={5} display="flex" alignItems={"center"}>
          <Box display="flex" flexDirection="column" gap={2}>
            {/* titulos */}
            <Typography variant="h1" component={"h1"}>
              {product?.title}
            </Typography>
            <Typography variant="subtitle1" component={"h2"}>
              ${product?.price}
            </Typography>

            {/* Agregar al carrito */}
            <Button color="secondary" className="circular-btn">
              Agregar al carrito
            </Button>

            <Box>
              <Typography variant="subtitle2">Descripción</Typography>
              <Typography variant="body2">{product?.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default ProductDetail;
