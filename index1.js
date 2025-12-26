import { createServer } from 'node:http';
import Main from './main.js';
const server = createServer(Main); // Main의 function Main(req, res)에게 콜백함수(익명함수) 인계
server.listen(3000, "127.0.0.1", () => {
  console.log('Listening on 127.0.0.1:3000');
});
