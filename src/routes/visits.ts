import { Router } from 'express';
import { VisitsController } from '../controllers';

const routes = Router();

routes.get('/', VisitsController.getVisits);
routes.post('/', VisitsController.incrementVisits);

export default routes;
