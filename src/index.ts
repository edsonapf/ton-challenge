import express, {
  Request, Response, NextFunction, ErrorRequestHandler, request,
} from 'express';
import { users, visits } from './routes';

require('dotenv').config();

const PORT = process.env.API_PORT || 3000;
const server = express();

server.use(express.json());

server.use('/visits', visits);
server.use('/users', users);

server.use((error: ErrorRequestHandler, request: Request, response: Response, next: NextFunction) => response.status(500).json({ errors: 'Internal server error.' }));
server.get('*', (request: Request, response: Response) => {
  response.status(404).json({ errors: 'Endpoint not found' });
});

server.listen(PORT, () => {
  console.log(`🚀 Running at http://localhost:${PORT}`);
});
