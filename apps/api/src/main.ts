import * as express from 'express';
import { data } from '@mono-repo/data';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});
app.get('/data', (req, res) => {
  console.log('/data  ');
  res.send({ data: data() });
});


const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
