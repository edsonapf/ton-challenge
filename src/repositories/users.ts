import { v4 } from 'uuid';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

const usersData: User[] = [];

class UsersRepository {
  async findUserById(id: string) {
    const userFound = usersData.find((user) => user.id === id);

    return new Promise((resolve) => resolve(userFound));
  }

  async findUserByEmail(email: string) {
    const userFound = usersData.find((user) => user.email === email);

    return new Promise((resolve) => resolve(userFound));
  }

  async createUser(name: string, email: string, phone: string) {
    const newUser: User = {
      id: v4(),
      name,
      email,
      phone,
    };

    usersData.push(newUser);
    return new Promise((resolve) => resolve(newUser));
  }
}

export default new UsersRepository();
