import axios, { AxiosError } from 'axios';
import { Request, Response } from 'express';
import { VisitsRepository } from '../repositories';

class VisitsController {
  constructor(private readonly visitsRepository: VisitsRepository) {}

  incrementVisits = async (request: Request, response: Response) => {
    const totalVisits = await this.visitsRepository.incrementVisits();
    return response.json({ totalVisits });
  };

  getVisits = async (request: Request, response: Response) => {
    try {
      const totalVisits = await this.visitsRepository.getVisits();
      return response.json({ totalVisits });
    } catch (exception: any | AxiosError) {
      if (axios.isAxiosError(exception)) {
        const status = exception?.response?.status || 500;
        return response.status(status).json({ errors: 'Error when try to get visits value' });
      }
      return response.status(500).json({ errors: 'Internal server error' });
    }
  };
}

export default VisitsController;
