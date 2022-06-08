import type { NextPage } from "next";
import { Box, Typography } from "@mui/material";

import { ShopLayout } from "../components/layouts/ShopLayout";
import { ProductList } from "../components/products";
import { useFetching } from "../hooks";

const Home: NextPage = () => {
  const data = useFetching("https://fakestoreapi.com/products?limit=4");

  return (
    <ShopLayout
      title="Fake-Store - Home"
      pageDescription="Encuentra los mejores productos de Fake store aquí"
    >
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Algunos los productos
      </Typography>

      <Box sx={{ mt: 2 }}>
        <ProductList products={data} />
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h2" sx={{ fontWeight: 700, textAlign: "center" }}>
          ¿Quienes somos?
        </Typography>

        <Typography variant="body1" sx={{ mt: 2, textAlign: "justify" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eius
          quibusdam commodi sint numquam sapiente modi laudantium natus ullam?
          Repellendus vero cum, laudantium accusamus sapiente aut nisi
          consequatur necessitatibus? Esse? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Molestiae libero cupiditate quae
          corrupti est dolores quas unde dolore eveniet fugiat aut autem, vitae
          odit, vel aperiam in asperiores. Reiciendis, culpa. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Ea, reiciendis blanditiis?
          Facere blanditiis itaque iure placeat, nobis expedita corrupti earum
          quam eius repellat debitis ut nam? Labore ipsam sapiente eos?
        </Typography>
      </Box>
    </ShopLayout>
  );
};

export default Home;
