import "../styles/globals.css";
import theme from "@the-innovation-circuit/theme";
import { Container, Box, ThemeProvider, Text } from "theme-ui";
import BGImg from "../components/bg-img";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../components/footer";

const navRoutes = [
  { path: "/", label: "Welcome Letter", mobileLabel: "Welcome" },
  { path: "/photos", label: "Event Photos", mobileLabel: "Photos" },
  { path: "/finances", label: "Donate", mobileLabel: "Donate" },
];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <script
          async
          defer
          data-website-id="4c26ff94-3f91-4acc-97d1-92c72c98d9c2"
          src="https://analytics.sampoder.com/umami.js"
        />
      </Head>
      <Box
        sx={{
          height: "100vh",
          overflow: "scroll",
          zIndex: 1,
          position: "relative",
          py: 4,
        }}
      >
        <Container
          variant="copy"
          sx={{
            px: 4,
            display: "flex",
            color: "black",
          }}
        >
          {navRoutes.map((route, index) => (
            <Link href={route.path}>
              <Box
                sx={{
                  backgroundColor: "#e8e0cc",
                  backgroundImage:
                    "url(https://www.transparenttextures.com/patterns/beige-paper.png)",
                  px: "10px",
                  pt: 1,
                  cursor: "pointer",
                  borderTopLeftRadius: index == 0 ? 6 : 0,
                  borderTopRightRadius: index + 1 == navRoutes.length ? 6 : 0,
                  ...(router.pathname != route.path
                    ? {
                        borderLeft: "0.3px solid black",
                        boxShadow: "inset 2px 2px -2px #000000",
                        opacity: "0.6",
                        "&:hover": { opacity: "0.8" },
                      }
                    : {}),
                }}
              >
                <Text sx={{ display: ["none", "inline"] }}>{route.label}</Text>
                <Text sx={{ display: ["inline", "none"] }}>
                  {route.mobileLabel}
                </Text>
              </Box>
            </Link>
          ))}
        </Container>
        <Container
          variant="copy"
          sx={{
            backgroundColor: "#e8e0cc",
            color: "black",
            pt: 2,
            pb: 2,
            boxShadow: "card",
            px: 4,
            backgroundImage:
              "url(https://www.transparenttextures.com/patterns/beige-paper.png)",
            borderRadius: 6,
          }}
        >
          <Component {...pageProps} />
        </Container>
        <Footer />
      </Box>

      <BGImg
        gradient="linear-gradient(rgba(51, 37, 87,0.7), rgba(51, 37, 87,0.95))"
        src="https://cloud-qmweg7d8y-hack-club-bot.vercel.app/0screenshot_2021-04-05_at_7.25.05_pm.png"
      />
      <style>{`img{object-fit: cover;}`}</style>
      <style>
        {`
        body{
          background: black!important;
        }
        `}
      </style>
    </ThemeProvider>
  );
}

export default MyApp;
