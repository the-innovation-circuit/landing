import "../styles/globals.css";
import { ThemeProvider } from "theme-ui";
import theme from "../lib/theme";
import { Container, Box, Text } from "theme-ui";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ maxWidth: "800px", py: "24px", px: "24px" }}>
        <Component {...pageProps} />
        <Box
          columns={2}
          sx={{ alignContent: "center", display: ["block", "flex"] }}
        >
          <Text
            as="p"
            sx={{
              fontSize: "12px",
              verticalAlign: "text-bottom",
              minWidth: ["100%", "1%"],
            }}
          >
            Innovation Circuit is fiscally sponsored by The Hack Foundation.
            Nonprofit EIN: 81-2908499.
          </Text>
          <Text
            sx={{ fontSize: "12px", flexGrow: 1, textAlign: ["left", "right"], mt: [2, 0], transform: ['', 'translateY(-2px)'] }}
            as="p"
          >
            <a href="https://vercel.com?utm_source=innovation-circuit&utm_campaign=oss" style={{ background: "#43326F", padding: "2px 6px" }}>
              Powered by ▲ Vercel
            </a>
          </Text>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
