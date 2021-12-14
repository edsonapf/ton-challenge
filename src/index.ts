import express from 'express';
import { users, visits } from './routes';

require('dotenv').config();

const PORT = process.env.API_PORT || 3000;
const server = express();

server.use(express.json());

server.use('/visits', visits);
server.use('/users', users);

server.listen(PORT, () => {
  console.log(`🚀 Running at http://localhost:${PORT}`);
});
