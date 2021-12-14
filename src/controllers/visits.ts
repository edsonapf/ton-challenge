import { Request, Response } from 'express';
import { VisitsRepository } from '../repositories';

class VisitsController {
  constructor(private readonly visitsRepository: VisitsRepository) {}

  incrementVisits = async (request: Request, response: Response) => {
    const totalVisits = await this.visitsRepository.incrementVisits();
    return response.json({ totalVisits });
  };

  getVisits = async (request: Request, response: Response) => {
    const totalVisits = await this.visitsRepository.getVisits();
    return response.json({ totalVisits });
  };
}

export default VisitsController;
