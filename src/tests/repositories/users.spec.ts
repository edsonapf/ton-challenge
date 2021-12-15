import { getConnection, createConnection } from 'typeorm';
import { v4 } from 'uuid';
import EntityManagerDb from '../../database/entityManagerDb';
import { Users } from '../../models/users';
import { UsersRepository } from '../../repositories';

describe('User repository', () => {
  beforeAll(() => createConnection({
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    entities: [Users],
    synchronize: true,
    logging: false,
  }));

  afterAll(() => {
    const connection = getConnection();
    return connection.close();
  });

  it('should create a user', async () => {
    const entityManagerDb = new EntityManagerDb();
    const usersRepository = new UsersRepository(entityManagerDb);

    const name = 'John Doe';
    const email = 'johndoe@email.com';

    const userCreated = await usersRepository.createUser(name, email);

    expect(userCreated).toBeTruthy();
    expect(userCreated.name).toEqual(name);
    expect(userCreated.email).toEqual(email);
  });

  it('should find a user by id', async () => {
    const entityManagerDb = new EntityManagerDb();
    const usersRepository = new UsersRepository(entityManagerDb);

    const name = 'John Doe';
    const email = 'johndoe@jest.com';

    const userCreated = await usersRepository.createUser(name, email);
    const userFound = await usersRepository.findUserById(userCreated.id);

    expect(userFound).toBeTruthy();
    expect(userFound?.id).toEqual(userCreated.id);
    expect(userFound?.name).toEqual(userCreated.name);
    expect(userFound?.email).toEqual(userCreated.email);
  });

  it('should not find a user by id', async () => {
    const entityManagerDb = new EntityManagerDb();
    const usersRepository = new UsersRepository(entityManagerDb);

    const userFound = await usersRepository.findUserById(v4());

    expect(userFound).toBeFalsy();
  });

  it('should find a user by email', async () => {
    const entityManagerDb = new EntityManagerDb();
    const usersRepository = new UsersRepository(entityManagerDb);

    const name = 'John Doe';
    const email = 'johndoe@test.com';

    const userCreated = await usersRepository.createUser(name, email);
    const userFound = await usersRepository.findUserByEmail(userCreated.email);

    expect(userFound).toBeTruthy();
    expect(userFound?.id).toEqual(userCreated.id);
    expect(userFound?.name).toEqual(userCreated.name);
    expect(userFound?.email).toEqual(userCreated.email);
  });

  it('should not find a user by email', async () => {
    const entityManagerDb = new EntityManagerDb();
    const usersRepository = new UsersRepository(entityManagerDb);

    const email = 'johndoe@notexists.com';

    const userFound = await usersRepository.findUserByEmail(email);

    expect(userFound).toBeFalsy();
  });
});
