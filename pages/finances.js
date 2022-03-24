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

function SupporterImage({ src, href, sx, ...props }) {
  return (
    <Link href={href}>
      <Image
        src={src}
        sx={{
          height: "50px",
          minWidth: '1px',
          maxWidth: 'none',
          bg: "white",
          p: "6px",
          borderRadius: 6,
          mr: 2,
          mt: 2,
          ...sx,
        }}
        {...props}
      />
    </Link>
  );
}

export default function Finances({ html }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Donate to the Innovation Circuit</title>
        <meta name="title" content="Donate to the Innovation Circuit" />
        <meta
          name="description"
          content="Help us bring STEM resources to the students that need them in Singapore."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Donate to the Innovation Circuit" />
        <meta
          property="og:description"
          content="Help us bring STEM resources to the students that need them in Singapore."
        />
        <meta
          property="og:image"
          content="https://cloud-okol6b1vm-hack-club-bot.vercel.app/1gems_innovation_week-2831-min.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Donate to the Innovation Circuit" />
        <meta
          property="twitter:description"
          content="Help us bring STEM resources to the students that need them in Singapore."
        />
        <meta
          property="twitter:image"
          content="https://cloud-okol6b1vm-hack-club-bot.vercel.app/1gems_innovation_week-2831-min.jpg"
        />
      </Head>
      <Heading sx={{ mt: 3, px: '0px', pb: 0 }}>Support the Innovation Circuit</Heading>
      <Text as="p" sx={{ mt: "8px" }}>
        To provide students in Singapore the best first exposure to STEM &
        computer science, we rely on the kind donations of companies and
        individuals. A{" "}
        <Link
          href="https://bank.hackclub.com/donations/start/the-innovation-circuit"
          sx={{
            bg: "black",
            color: "white!important",
            px: "2px",
            textDecoration: "none",
            border: "1.5px solid",
            borderColor: "black",
            "&:hover": { bg: "rgba(0, 0, 0, 0)", color: "black!important" },
          }}
        >
          monetary donation
        </Link>{" "}
        would be highly appreciated. If you'd like to support in an other way,
        we'd equal appreciate that and would love to{" "}
        <Link
          href="mailto:contact@innovationcircuit.co"
          sx={{
            bg: "black",
            color: "white!important",
            px: "2px",
            textDecoration: "none",
            border: "1.5px solid",
            borderColor: "black",
            "&:hover": { bg: "rgba(0, 0, 0, 0)", color: "black!important" },
          }}
        >
          hear from you
        </Link>
        .
      </Text>
      <Heading as="h3" sx={{ mt: 3, px: 0 }}>
        Thank you to our kind supporters
      </Heading>
      <Flex sx={{flexWrap: 'wrap'}}>
        <SupporterImage
          src="https://www.ibo.org/Assets/Images/logo-163.svg"
          href="https://www.ibo.org"
          sx={{
            bg: "white",
          }}
        />
        <SupporterImage
          src="https://www.ashoka.org/themes/custom/blanco_ashoka_org/logo.svg"
          href="https://www.ashoka.org/en-sg"
          sx={{
            bg: "#F46523",
            p: '6px'
          }}
        />
        <SupporterImage
          src="https://www.finsmes.com/wp-content/uploads/2020/04/vercel.png"
          href="https://vercel.com"
          sx={{
            bg: "snow",
            filter: 'invert(100%)'
          }}
        />
        <SupporterImage
          src="https://blog.replit.com/images/logo-dark.png"
          href="https://replit.com"
          sx={{
            bg: "black",
            px: '12px'
          }}
        />
        <SupporterImage
          src="https://logos-download.com/wp-content/uploads/2019/07/Twilio_Logo.png"
          href="https://twilio.com"
          sx={{
            bg: "white",
            px: '12px'
          }}
        />
        <SupporterImage
          src="https://upload.wikimedia.org/wikipedia/commons/0/02/Github.com-SunghanKim.png"
          href="https://education.github.com"
          sx={{
            bg: "black",
          }}
        />
        <SupporterImage
          src="https://assets.hackclub.com/flag-standalone.png"
          href="https://hackclub.com"
          sx={{
            bg: "white",
          }}
        />
        <SupporterImage
          src="https://ezsy.com/wp-content/uploads/2020/12/cropped-Ezsy-Final-01.png"
          href="https://ezsy.com/"
          sx={{
            bg: "white",
            p: "0px"
          }}
        />
        <SupporterImage
          src="https://static.wixstatic.com/media/998f29_3d263ce2f09b410abef0a41c501247e5~mv2.png/v1/fill/w_356,h_96,al_c,usm_0.66_1.00_0.01/ASEAN%20FINTECH%20GRP%20LOGO.png"
          href="https://www.aseanfintechgroup.com/"
          sx={{
            bg: "white",
          }}
        />
        <SupporterImage
          src="https://www.midasacademy.com.sg/wp-content/uploads/2021/11/midas.png"
          href="https://www.midasacademy.com.sg/"
          sx={{
            bg: "white",
          }}
        />
        <SupporterImage
          src="https://www.stickermule.com/about/_next/static/public/logo.cf620062b17ccd7b1f88688e749fea10.svg"
          href="https://stickermule.com"
          sx={{
            bg: "#4e2817",
          }}
        />
      </Flex>
      <Heading as="h2" sx={{ mt: 4, px: 0 }}>
        Financial Transparency
      </Heading>
      <Box dangerouslySetInnerHTML={{ __html: html }} sx={{ mb: 3 }} />
      <style>
        {`
        body{
          height: 100vh!important;
        }
        `}
      </style>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  let html = await fetch(
    `https://bank.hackclub.com/the-innovation-circuit${
      ctx.query.page ? "?page=" + ctx.query.page : ""
    }`
  ).then((r) => r.text());
  html = html.replace(
    `<h1 class="flex items-center">
  Financials
</h1>`,
    '<h1 class="flex items-center">Our Finances</h1>'
  );
  html = html.replace(
    'data-src="/the-innovation-circuit/dashboard_stats"',
    'data-src="https://bank.hackclub.com/the-innovation-circuit/dashboard_stats"'
  );
  html = html.replace(
    '<ul class="pagination flex items-center justify-center list-reset pt2">',
    '<ul class="pagination flex items-center justify-left list-reset pt2">'
  );
  html = html.replace(
    new RegExp("/the-innovation-circuit?page=", "g"),
    "/finances?page="
  );
  html = html.replace(
    new RegExp("<meta", "g"),
    "<heta"
  );
  html = html.replace(
    new RegExp("<title", "g"),
    "<hitle style='display: none'"
  );
  html = html.replace(
    new RegExp("</title", "g"),
    "</hitle"
  );
  html = html.replace(
    new RegExp("/the-innovation-circuit?page=", "g"),
    "/finances?page="
  );
  html = html.replace('<meta name="theme-color" content="#ec3750">', "");
  html = html.replace(
    '<a href="/the-innovation-circuit">&laquo; First</a>',
    '<a href="/api/finances">« First</a>'
  );
  html = html.replace(`Hack Club Summer of Making`, "The Innovation Circuit");
  html = html.replace(
    "<head>",
    `<style>

      @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

      .app__sidebar{
        display: none!important;
      }
      .filterbar{
        display: none!important;
      }
      .container{
        grid-template-columns: 1fr!important;
        max-width: 800px!important;
        padding: 0rem!important;
      }
      a{
        color: black!important;
      }
      .muted{
        color: black!important;
      }
      .transparency-banner{
        display: none!important;
      }
      body > main > article > div.flex.flex-wrap.items-center.mb1.md-mb2{
        display: none!important;
      }
      .tooltipped--s:after {
        display: none!important;
      }
      .stat__label svg{
        display: none!important;
      }
      .stat{
        pointer-events: none!important;
      }
      .jquery-modal{
        display: none!important;
      }
      .list-badge{
        display: none!important;
      }
      .heading {
        display: none!important;
      }
      .table-container{
        margin-top: 8px!important;
        margin-bottom: 4px!important;
      }
      input[type='submit'], .btn {
        margin-right: 4px;
        margin-left: 4px;
        border-radius: 0rem!important;
        color: black!important;
        background-color: white!important;
        background-image: none!important;
      }
      thead{
        display: none!important;
      }
      h2.heading, h3.heading {
        margin-bottom: 8px!important;
        border-bottom-width: 0px!important;
      }

      .avatar-grow {
        display: none;
      }

      .pop{
        display: none!important;
      }

      .shade-red, .transaction--negative {
        background-color: rgba(236,55,80,0.625)!important;
        }

        .shade-green, .transaction--positive {
          background-color: rgba(51,214,166,0.625)!important;
          }

          .transaction__icon svg {

            fill: white!important;
            }

            .app__content h1:first-child {
              box-sizing: border-box;
              margin: 0;
              min-width: 0;
              font-family: inherit;
              font-weight: heading;
              line-height: heading;
              text-align: left;
              font-size: 36px;
              margin: auto;
              margin-top: 12px!important;
              padding-top: 4px;
              padding-bottom: 4px;
              margin-bottom: 12px!important;
              border-bottom: none;
              padding-left: 0px!important;
              display: none!important;
            }


      
      body{
        font-family: 'Fira Sans', sans-serif!important;
        color: black!important;
        background-color: #e8e0cc!important;
        background-image: url("https://www.transparenttextures.com/patterns/beige-paper.png")!important;
        height: 100vh!important;
      }
      h1, h2, h3, .heading, .stat__value, .brand-sans {
        font-family: 'Fira Sans', sans-serif!important;
      }
      h1, h2, h3, h4, fieldset legend {
        font-weight: bold!important;
        line-height: 1.125!important;
        letter-spacing: normal!important;
        }
        .stat__value:before {
          content: ''!important;
          font-size: 1.5rem;
          vertical-align: baseline!important;
        }
        .stat--small {
          display: none!important;
        }
    </style>
    <head><meta charset='utf-8'>`
  );
  return { props: { html } };
}
