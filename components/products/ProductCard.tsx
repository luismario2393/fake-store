import { FC, useMemo, useState } from "react";
import NextLink from "next/link";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";

import { IProduct } from "../../interfaces";

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const { image, title, price, id } = product;

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card>
        <NextLink href={`/products/${id}`} passHref prefetch={false}>
          <Link>
            <CardActionArea>
              <CardMedia
                component={"img"}
                className="fadeIn"
                image={image}
                alt={title}
                height={350}
                sx={{
                  objectFit: "contain",
                }}
              />
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>

      <Box sx={{ mt: 1 }} className="fadeIn">
        <Typography fontWeight={700}>{title}</Typography>
        <Typography fontWeight={500}>${price}</Typography>
      </Box>
    </Grid>
  );
};
