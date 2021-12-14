import { Router } from 'express';
import { UsersController } from '../controllers';
import { UsersRepository } from '../repositories';
import { createUserValidator, findUserByIdValidator } from '../validators/users';

const routes = Router();

const usersRepository = new UsersRepository();
const usersController = new UsersController(usersRepository);

routes.get('/:id', findUserByIdValidator, usersController.findUserById);
routes.post('/', createUserValidator, usersController.createUser);

export default routes;
