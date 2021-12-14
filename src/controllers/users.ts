import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { UsersRepository } from '../repositories';

class UsersController {
  constructor(private readonly usersRepository: UsersRepository) {}

  findUserById = async (request: Request, response: Response) => {
    const fieldsValidation = validationResult(request);
    if (!fieldsValidation.isEmpty()) {
      return response.status(400).json({ errors: fieldsValidation.array() });
    }

    const { id } = request.params;
    const userFound = await this.usersRepository.findUserById(id);
    if (!userFound) {
      return response.status(404).json({ error: 'User not found' });
    }

    return response.json({ user: userFound });
  };

  createUser = async (request: Request, response: Response) => {
    const fieldsValidation = validationResult(request);
    if (!fieldsValidation.isEmpty()) {
      return response.status(400).json({ errors: fieldsValidation.array() });
    }

    const { name, email } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Field name is required' });
    }

    const userByEmailExists = await this.usersRepository.findUserByEmail(email);
    if (userByEmailExists) {
      return response.status(400).json({ error: 'User with this email already exists' });
    }

    const newUser = await this.usersRepository.createUser(name, email);

    return response.json(newUser);
  };
}

export default UsersController;
