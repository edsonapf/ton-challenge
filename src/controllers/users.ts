import { Request, Response } from 'express';
import { UsersRepository } from '../repositories';

class UsersController {
  async findUserById(request: Request, response: Response) {
    const { id } = request.params;
    const userFound = await UsersRepository.findUserById(id);
    if (!userFound) {
      return response.status(404).json({ error: 'User not found' });
    }

    return response.json({ user: userFound });
  }

  async createUser(request: Request, response: Response) {
    const { name, email, phone } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Field name is required' });
    }

    const userByEmailExists = await UsersRepository.findUserByEmail(email);
    if (userByEmailExists) {
      return response.status(400).json({ error: 'User with this email already exists' });
    }

    const newUser = await UsersRepository.createUser(name, email, phone);

    return response.json({ user: newUser });
  }
}

export default new UsersController();
