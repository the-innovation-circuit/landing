import { Box, Text, Link } from "theme-ui";

export default function Footer() {
  return (
    <Box
      sx={{ alignContent: "center", display: "block", color: 'white', textAlign: 'center', mt: 3, px: 4}}
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
        sx={{
          fontSize: "12px",
          flexGrow: 1,
          textAlign: "center",
          mt: 3,
          transform: ["", "translateY(-2px)"],
        }}
        as="p"
      >
        <Link
          href="https://vercel.com?utm_source=innovation-circuit&utm_campaign=oss"
          sx={{ background: "#e8e0cc", backgroundImage:
          "url(https://www.transparenttextures.com/patterns/beige-paper.png)", padding: "4px 8px", color: "black", textDecoration: 'none', borderRadius: 2 }}
        >
          Powered by ▲ Vercel
        </Link>
      </Text>
    </Box>
  );
}
