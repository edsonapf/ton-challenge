import express from 'express';
import { users, visits } from './routes';

const PORT = 3000;
const server = express();

server.use(express.json());

server.use('/visits', visits);
server.use('/users', users);

server.listen(PORT, () => {
  console.log(`🚀 Running at http://localhost:${PORT}`);
});
