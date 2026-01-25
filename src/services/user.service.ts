import { userRepository } from "../repositories/user.repository";
import { UserInput, User, UserOutput } from "../types";

export const userService = {
  async create(data: UserInput): Promise<UserOutput> {
    return await userRepository.create(data);
  },

  async getAll(): Promise<User[]> {
    return userRepository.getAll();
  },

  async getUserById(id: string): Promise<User | undefined> {
    return userRepository.getUserById(id);
  },

  async updateUser(
    id: string,
    data: Partial<UserInput>,
  ): Promise<UserOutput | null> {
    return await userRepository.update(id, data);
  },

  async deleteUser(id: string): Promise<void> {
    await userRepository.delete(id);
  },
};
