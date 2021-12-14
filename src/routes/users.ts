import { Router } from 'express';
import { UsersController } from '../controllers';
import EntityManagerDb from '../database/entityManagerDb';
import { UsersRepository } from '../repositories';
import { createUserValidator, findUserByIdValidator } from '../validators/users';

const routes = Router();

const entityManagerDb = new EntityManagerDb();
const usersRepository = new UsersRepository(entityManagerDb);
const usersController = new UsersController(usersRepository);

routes.get('/:id', findUserByIdValidator, usersController.findUserById);
routes.post('/', createUserValidator, usersController.createUser);

export default routes;
