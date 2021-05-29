import Head from "next/head";
import Image from "next/image";
import { Container, Heading, Grid, Text } from "theme-ui";

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

      <Grid gap={2} columns={[2, null, 4]}>
        <Image
          width={200}
          height={150}
          src="https://cloud-okol6b1vm-hack-club-bot.vercel.app/0gems_innovation_week-2763-min.jpg"
        />
        <Image
          width={200}
          height={150}
          src="https://cloud-okol6b1vm-hack-club-bot.vercel.app/1gems_innovation_week-2831-min.jpg"
        />
        <Image
          width={200}
          height={150}
          src="https://cloud-okol6b1vm-hack-club-bot.vercel.app/2gems_innovation_week-2754-min.jpg"
        />
        <Image
          width={200}
          height={150}
          src="https://cloud-okol6b1vm-hack-club-bot.vercel.app/3gems_innovation_week-2869-min.jpg"
        />
      </Grid>
      <Heading
        as="h1"
        sx={{
          backgroundColor: "#fff",
          color: "#674ea7ff",
          width: "calc(100% + 36px)",
          textAlign: "left",
          fontSize: ["2.5em", "3em", "3em"],
          margin: "auto",
          marginTop: "18px",
          py: "4px",
          px: "16px",
          ml: "-18px",
        }}
      >
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
        We're now in the process of establishing the Innovation Circuit, which
        in essence is a touring Innovation Week. We'll be taking the
        fundamentals of Innovation Week and building them into an afternoon
        event that we can deliver at schools (starting in Singapore & Southern
        Malaysia). All schools will need to provide is a large indoor space and
        we'll handle the rest.
        <br />
        <br />
        If this interests you, we'd love to meet you! Specifically, we're
        interested in discussing with teachers who'd like to bring the program
        to their school. Please contact us at contact@innovationcircuit.co.
        <br />
        <br />
        Looking forward,
        <p>
          <img
            src="https://cloud-aukgm77yx-hack-club-bot.vercel.app/0signature-2.png"
            style={{ height: "32px", padding: "4px", paddingLeft: "0px" }}
          />
          <img
            src="https://cloud-9tgpem2k5-hack-club-bot.vercel.app/0signature-5.png"
            style={{ height: "32px", padding: "4px" }}
          />
          <img
            src="https://cloud-7tu95437y-hack-club-bot.vercel.app/0signature-4.png"
            style={{ height: "32px", padding: "4px" }}
          />
          <img
            src="https://cloud-8tu0c4v3c-hack-club-bot.vercel.app/0signature-3.png"
            style={{ height: "32px", padding: "4px" }}
          />
          <img
            src="https://cloud-6pnj6p6hv-hack-club-bot.vercel.app/0signature.png"
            style={{ height: "32px", padding: "4px" }}
          />

          <br />
          
        </p>
      </Text>

      <style>{`img{object-fit: cover;}`}</style>
    </div>
  );
}
