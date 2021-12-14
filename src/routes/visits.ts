import { Router } from 'express';
import { VisitsController } from '../controllers';
import { VisitsRepository } from '../repositories';

const routes = Router();

const visitsRepository = new VisitsRepository();
const visitsController = new VisitsController(new VisitsRepository());

routes.get('/', visitsController.getVisits);
routes.post('/', visitsController.incrementVisits);

export default routes;
