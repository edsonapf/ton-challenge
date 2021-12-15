import express, {
  Request, Response, NextFunction, ErrorRequestHandler,
} from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { users, visits } from './routes';

require('dotenv').config();

const initiateServer = () => {
  const PORT = process.env.PORT || 80;
  const server = express();

  server.use(express.json());
  server.use(cors());
  server.use(morgan('dev'));
  server.use(helmet());

  server.use('/visits', visits);
  server.use('/users', users);

  server.use((error: ErrorRequestHandler, request: Request, response: Response, next: NextFunction) => response.status(500).json({ errors: 'Internal server error.' }));
  server.get('*', (request: Request, response: Response) => {
    response.status(404).json({ errors: 'Endpoint not found' });
  });

  server.listen(PORT, () => {
    console.log(`🚀 Running at http://localhost:${PORT}`);
  });
};

export default initiateServer;
