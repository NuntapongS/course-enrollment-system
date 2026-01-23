import { userRepository } from "../repositories/user.repository";
import { UserInput, User } from "../types";

export const userService = {
  async create(data: UserInput): Promise<User> {
    const newUser = await userRepository.create(data);
    return newUser;
  },
};
