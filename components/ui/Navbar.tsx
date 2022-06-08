import NextLink from "next/link";
import { AppBar, Box, Button, Link, Toolbar, Typography } from "@mui/material";

export const Navbar = ({ handleMenuAdd }: { handleMenuAdd: () => void }) => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link display={"flex"} alignItems="center">
            <Typography variant="h6">Fake |</Typography>
            <Typography sx={{ ml: 0.5 }}>Store</Typography>
          </Link>
        </NextLink>

        <Box flex={1} />

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <NextLink href="/" passHref>
            <Link>
              <Button>Home</Button>
            </Link>
          </NextLink>
          <NextLink href="/products" passHref>
            <Link>
              <Button>Productos</Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1} />

        <Button onClick={handleMenuAdd}>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};
