// console.log("Hello World")
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/htmlno');
  // res.end('Hello World This is Umair');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>pseudo selector and more designing</title>
      <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Roboto+Slab:wght@200&display=swap" rel="stylesheet">
      <style>
  .container{
      border: 2px solid rgb(20, 99, 0);
      background-color: wheat;
      padding: 34px;
      margin: 34px auto;
      width: 666px;
  }
  a{
      text-decoration: none;
      color: black;
  }
  a:hover{
      color: black;
      background-color: darkgreen;
  }
  a:visited{
  background-color: orange;
  }
  a:active{
      background-color: plum;
  }
  .btn{
      background-color: red;
      color: seashell;
      padding: 6px;
      border: none;
      cursor: pointer;
      font-size: 13px;
      border-radius: 4px;
      font-family: 'Dancing Script', cursive;
  }
  .btn:hover{
      color: olive;
      border: solid 2px orchid;
  }
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h2>This is my heading</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, minus sed iure delectus dicta numquam ab nam, commodi explicabo at accusantium quia, natus doloribus cum repudiandae reiciendis odio cumque consequatur.</p>
          <a href="https://yahoo.com"class="btn">Read More</a>
          <button class="btn">Contact Us</button>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});