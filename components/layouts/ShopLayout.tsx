import NextLink from "next/link";
import { Box, Link, Typography } from "@mui/material";
import Head from "next/head";
import { FC, ReactNode, useState } from "react";
import { Navbar, SideMenu } from "../ui";
import { FacebookOutlined, Instagram } from "@mui/icons-material";

interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
  children: ReactNode;
}

export const ShopLayout: FC<Props> = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const handleSideMenuAdd = () => {
    setIsSideMenuOpen(true);
  };

  const handleSideMenuClose = () => {
    setIsSideMenuOpen(false);
  };

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={pageDescription} />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />

        {imageFullUrl && <meta name="og:description" content={imageFullUrl} />}
      </Head>

      <nav>
        <Navbar handleMenuAdd={handleSideMenuAdd} />
      </nav>

      <SideMenu open={isSideMenuOpen} onClose={handleSideMenuClose} />

      <main
        style={{
          margin: "80px auto",
          maxWidth: "1440px",
          padding: "0px 30px",
        }}
      >
        {children}
      </main>

      {/* Footer */}

      <footer
        style={{
          maxHeight: "100px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 3,
            borderTop: "1px solid",
            borderColor: "gray.2",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "0px 30px",
            }}
          >
            <Box display="flex" flexDirection={"column"} gap={2}>
              <NextLink
                href={"https://www.facebook.com/"}
                passHref
                target={"_blank"}
              >
                <Link display={"flex"} alignItems="center" gap={1}>
                  <FacebookOutlined />
                  Facebook
                </Link>
              </NextLink>
              <NextLink
                href={"https://www.instagram.com/"}
                passHref
                target={"_blank"}
              >
                <Link display={"flex"} alignItems="center" gap={1}>
                  <Instagram />
                  Instagram
                </Link>
              </NextLink>
            </Box>
            <Box>
              <NextLink href="/" passHref>
                <Link display={"flex"} alignItems="center">
                  <Typography variant="h6">Fake |</Typography>
                  <Typography sx={{ ml: 0.5 }}>Store</Typography>
                </Link>
              </NextLink>
            </Box>
          </Box>
        </Box>
      </footer>
    </>
  );
};
