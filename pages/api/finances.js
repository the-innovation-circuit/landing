// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  let html = await fetch(
    `https://bank.hackclub.com/the-innovation-circuit${
      req.query.page ? "?page=" + req.query.page : ""
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
    new RegExp("/the-innovation-circuit?page=", "g"),
    "/finances?page="
  );
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
            }
      
      body{
        font-family: 'Fira Sans', sans-serif!important;
        color: black!important;
        background-color: #e8e0cc!important;
        background-image: url("https://www.transparenttextures.com/patterns/beige-paper.png")!important;
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
    </style>
    <head><meta charset='utf-8'>`
  );
  res.send(html);
};
