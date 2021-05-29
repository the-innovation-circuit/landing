import "../styles/globals.css";
import { ThemeProvider } from "theme-ui";
import theme from "../lib/theme";
import { Container, Flex, Text } from "theme-ui";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ maxWidth: "800px", py: "24px", px: "24px" }}>
        <Component {...pageProps} />
        <Flex columns={2}>
        <Text as="i" sx={{ fontSize: "12px" }}>
            Innovation Circuit is fiscally sponsored by The Hack Foundation.
            Nonprofit EIN: 81-2908499.
          </Text>
          <Text sx={{ fontSize: "12px" }}>Powered by ▲ Vercel</Text>
        </Flex>
      </Container>
      
    </ThemeProvider>
  );
}

export default MyApp;
