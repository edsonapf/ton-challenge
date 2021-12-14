import { v4 } from 'uuid';

interface User {
  id: string;
  name: string;
  email: string;
}

const usersData: User[] = [];

class UsersRepository {
  findUserById = async (id: string) => {
    const userFound = usersData.find((user) => user.id === id);

    return new Promise((resolve) => resolve(userFound));
  };

  findUserByEmail = async (email: string) => {
    const userFound = usersData.find((user) => user.email === email);

    return new Promise((resolve) => resolve(userFound));
  };

  createUser = async (name: string, email: string, phone: string) => {
    const newUser: User = {
      id: v4(),
      name,
      email,
    };

    usersData.push(newUser);
    return new Promise((resolve) => resolve(newUser));
  };
}

export default UsersRepository;
