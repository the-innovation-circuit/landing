import Head from "next/head";
import {
  Container,
  Heading,
  Grid,
  Text,
  Flex,
  Box,
  Image,
  Link,
} from "theme-ui";
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
          content="Innovation Circuit supports & runs amazing STEM events in APAC."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="The Innovation Circuit" />
        <meta
          property="og:description"
          content="Innovation Circuit supports & runs amazing STEM events in APAC."
        />
        <meta
          property="og:image"
          content="https://cloud-okol6b1vm-hack-club-bot.vercel.app/1gems_innovation_week-2831-min.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="The Innovation Circuit" />
        <meta
          property="twitter:description"
          content="Bringing STEM resources to the students across Singapore."
        />
        <meta
          property="twitter:image"
          content="https://cloud-okol6b1vm-hack-club-bot.vercel.app/1gems_innovation_week-2831-min.jpg"
        />
      </Head>

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
        Introducing the Innovation Circuit
      </Heading>
      <Text as="p" sx={{ fontSize: "18px", mt: "16px" }}>
        For two years now, we've been running an "Innovation Week" at our
        school. Each Innovation Week brings together students from all walks of
        life to engage with technology and maker culture. They do so through a
        carefully crafted curriculum and series of activities that are made to
        appeal to students.
        <br />
        <br />
        As we reflect on the past two years we have concluded that we are in a
        great position to do more. To have a genuine impact, we must go beyond
        our school and support those who are not as fortunate as us.
        <br />
        <br />
        We're now established the Innovation Circuit, which
        is creating APAC-wide programs that bring elements of Innovation Week
        to a larger audience. So far, we've worked with three schools to deliver 
        technology events for their students. We've also ran the {" "}
        <Link href="https://innovation-challenge.co/">Innovation Challenge</Link>, <Link href="https://photos.app.goo.gl/pd5MprLVn7ZDixv17">
        brought CodeDay to Singapore</Link> and the <Link href="https://jam.innovationcircuit.com">SG Game Jam</Link>. 
        Currently, we're preparing a large IRL hackathon in Singapore (stay tuned!).
        <br />
        <br />
        If this interests you, we'd love to meet you! Specifically, we're
        interested in discussing with student leadership groups who'd like to
        work with us in their schools. Please contact us at{" "}
        <Link href="mailto:contact@innovationcircuit.com">
          contact@innovationcircuit.com
        </Link>{" "}
        or through{" "}
        <Link href="https://www.instagram.com/innovationcircuit/">
          Instagram
        </Link>
        .
        <br />
        <br />
        Looking forward,
        <p>
          <img
            src="https://cloud-aukgm77yx-hack-club-bot.vercel.app/0signature-2.png"
            style={{
              height: "32px",
              padding: "4px",
              paddingLeft: "0px",
              filter: "invert(100%) grayscale(100%)",
            }}
          />
          <img
            src="https://cloud-9tgpem2k5-hack-club-bot.vercel.app/0signature-5.png"
            style={{
              height: "32px",
              padding: "4px",
              filter: "invert(100%) grayscale(100%)",
            }}
          />
          <img
            src="https://cloud-7tu95437y-hack-club-bot.vercel.app/0signature-4.png"
            style={{
              height: "32px",
              padding: "4px",
              filter: "invert(100%) grayscale(100%)",
            }}
          />
          <img
            src="https://cloud-8tu0c4v3c-hack-club-bot.vercel.app/0signature-3.png"
            style={{
              height: "32px",
              padding: "4px",
              filter: "invert(100%) grayscale(100%)",
            }}
          />
          <img
            src="https://cloud-6pnj6p6hv-hack-club-bot.vercel.app/0signature.png"
            style={{
              height: "32px",
              padding: "4px",
              filter: "invert(100%) grayscale(100%)",
            }}
          />
        </p>
      </Text>
    </div>
  );
}
