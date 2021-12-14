import { Request, Response } from 'express';
import { VisitsRepository } from '../repositories';

class VisitsController {
  async incrementVisits(request: Request, response: Response) {
    const totalVisits = await VisitsRepository.incrementVisits();
    return response.json({ totalVisits });
  }

  async getVisits(request: Request, response: Response) {
    const totalVisits = await VisitsRepository.getVisits();
    return response.json({ totalVisits });
  }
}

export default new VisitsController();
