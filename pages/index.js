import Head from "next/head";
import { Container, Heading, Grid, Text, Flex, Box, Image } from "theme-ui";
import BGImg from "../components/bg-img";
export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>The Innovation Circuit</title>
        <meta name="title" content="The Innovation Circuit" />
        <meta
          name="description"
          content="Bringing STEM resources to the students that need them."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="The Innovation Circuit" />
        <meta
          property="og:description"
          content="Bringing STEM resources to the students that need them."
        />
        <meta
          property="og:image"
          content="https://cloud-okol6b1vm-hack-club-bot.vercel.app/1gems_innovation_week-2831-min.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="The Innovation Circuit" />
        <meta
          property="twitter:description"
          content="Bringing STEM resources to the students that need them."
        />
        <meta
          property="twitter:image"
          content="https://cloud-okol6b1vm-hack-club-bot.vercel.app/1gems_innovation_week-2831-min.jpg"
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
          <Box
            sx={{
              backgroundColor: "#e8e0cc",

              backgroundImage:
                "url(https://www.transparenttextures.com/patterns/beige-paper.png)",
              px: 2,
              pt: 1,
              borderTopLeftRadius: 6
            }}
          >
            Welcome Letter
          </Box>
          <Box
            sx={{
              backgroundColor: "#e8e0cc",
              backgroundImage:
                "url(https://www.transparenttextures.com/patterns/beige-paper.png)",
              px: 2,
              pt: 1,
              borderLeft: '0.5px solid black',
              opacity: '0.6'
            }}
          >
            Finances
          </Box>
          <Box
            sx={{
              backgroundColor: "#e8e0cc",
              backgroundImage:
                "url(https://www.transparenttextures.com/patterns/beige-paper.png)",
              px: 2,
              pt: 1,
              opacity: '0.6',
              borderLeft: '0.5px solid black',
              borderTopRightRadius: 6
            }}
          >
            Finances
          </Box>
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
            borderRadius: 6
          }}
        >
          <Flex sx={{ alignItems: "center" }}>
            <Box sx={{ fontWeight: 500 }}>
              The Students <br /> Secondary Schools <br />
              Singapore, Singapore
            </Box>
            <Box sx={{ height: "100px", textAlign: "right", flexGrow: 1 }}>
              <Image
                sx={{
                  height: "100px",
                  textAlign: "right",
                  transform: "rotate(5deg)",
                }}
                src="https://64.media.tumblr.com/f0981c0b994397888fa9fba9666f10e3/93cd35f1c41d3b53-9e/s400x600/04609cac07560fdcd0bfe8f5e80a6c53244df608.png"
              />
            </Box>
          </Flex>
          <Heading as="h1" sx={{ maxWidth: "70%" }}>
            An Invitation to Bring the Innovation Circuit to Your School
          </Heading>
          <Text as="p" sx={{ fontSize: "18px", mt: "16px" }}>
            For two years now, we've been running an "Innovation Week" at our
            school. Each Innovation Week brings together students from all walks
            of life to engage with technology and maker culture. They do so
            through a carefully crafted curriculum and series of activities that
            are made to appeal to students.
            <br />
            <br />
            As we reflect on the past two years we have concluded that we are in
            a great position to do more. To have a genuine impact, we must go
            beyond our school and support those who are not as fortunate as us.
            <br />
            <br />
            We're now in the process of establishing the Innovation Circuit,
            which in essence is a touring Innovation Week. We'll be taking the
            fundamentals of Innovation Week and building them into an afternoon
            event that we can deliver at schools (starting in Singapore &
            Southern Malaysia). All schools will need to provide is a large
            indoor space and we'll handle the rest.
            <br />
            <br />
            If this interests you, we'd love to meet you! Specifically, we're
            interested in discussing with teachers who'd like to bring the
            program to their school. Please contact us at
            contact@innovationcircuit.co.
            <br />
            <br />
            Looking forward,
            <p>
              <img
                src="https://cloud-aukgm77yx-hack-club-bot.vercel.app/0signature-2.png"
                style={{ height: "32px", padding: "4px", paddingLeft: "0px", filter: "invert(100%) grayscale(100%)" }}
              />
              <img
                src="https://cloud-9tgpem2k5-hack-club-bot.vercel.app/0signature-5.png"
                style={{ height: "32px", padding: "4px", filter: "invert(100%) grayscale(100%)" }}
              />
              <img
                src="https://cloud-7tu95437y-hack-club-bot.vercel.app/0signature-4.png"
                style={{ height: "32px", padding: "4px", filter: "invert(100%) grayscale(100%)" }}
              />
              <img
                src="https://cloud-8tu0c4v3c-hack-club-bot.vercel.app/0signature-3.png"
                style={{ height: "32px", padding: "4px", filter: "invert(100%) grayscale(100%)" }}
              />
              <img
                src="https://cloud-6pnj6p6hv-hack-club-bot.vercel.app/0signature.png"
                style={{ height: "32px", padding: "4px", filter: "invert(100%) grayscale(100%)" }}
              />
            </p>
          </Text>
        </Container>
      </Box>
      <BGImg
        gradient="linear-gradient(rgba(51, 37, 87,0.7), rgba(51, 37, 87,0.95))"
        src="https://cloud-okol6b1vm-hack-club-bot.vercel.app/0gems_innovation_week-2763-min.jpg"
      />
      <style>{`img{object-fit: cover;}`}</style>
    </div>
  );
}

const old = (old) => (
  <Flex
    sx={{
      position: "relative",
      zIndex: 1,
      p: 4,
      alignItems: "center",
      minHeight: "100vh",
    }}
  >
    <Box sx={{ maxWidth: "800px" }}>
      <Heading as="h1" sx={{ fontSize: 6, textShadow: "elevated" }}>
        Make Your School a{" "}
        <Text sx={{ fontSize: 7, textDecoration: "underline" }}>
          School of Makers
        </Text>
      </Heading>
      <Text as="div" my={[0, 0, 0]} variant="lead">
        Innovation Circuit events bring a school alive in a way unlike anything
        else, through a combination of making, food, stickers and more our
        events unleash the maker spirit of every student. If you're a student
        and would like to bring this to your school, we'll give you all the
        resources you need from pizza to workshops to make the perfect event.
      </Text>
    </Box>
  </Flex>
);
