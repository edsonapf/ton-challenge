import { Router } from 'express';
import { UsersController } from '../controllers';

const routes = Router();

routes.get('/:id', UsersController.findUserById);
routes.post('/', UsersController.createUser);

export default routes;
