import EntityManagerDb from '../database/entityManagerDb';
import { Users } from '../models/users';

class UsersRepository {
  constructor(private readonly entityManagerDb: EntityManagerDb) {}

  findUserById = async (id: string) => {
    const userFound = await this.entityManagerDb.getEntityManager().findOne(Users, id);

    return userFound;
  };

  findUserByEmail = async (email: string) => {
    const userFound = await this.entityManagerDb.getEntityManager().findOne(Users, { email });

    return userFound;
  };

  createUser = async (name: string, email: string) => {
    const userEntity = this.entityManagerDb.getEntityManager().create(Users, {
      name,
      email,
    });
    const userCreated = await this.entityManagerDb.getEntityManager().save(userEntity);

    return userCreated;
  };
}

export default UsersRepository;
