const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
    <body>
      <h1>Ola mundo</h1>
      <ul>
        <li>foo</li>
        <li>baz</li>
        <li>bar</li>
      </ul>
    </body>
    `);
  } else if (method === 'POST' && url === '/json') {
    res.statusCode = 201; // created
    res.setHeader('Content-Type', 'application/json');
    const obj = { escola: 'let\'s code' };
    const objAsStr = JSON.stringify(obj);
    res.write(objAsStr);
    res.end();
  }
});

server.listen(8080, () => {
  console.log(`escutando em http://localhost:8080`);
});