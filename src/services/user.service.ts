import { userInformationRepository } from "../repositories/user.information.repository";
import { userRepository } from "../repositories/user.repository";
import { UserInput, User, UserOutput } from "../types";

export const userService = {
  async create(data: UserInput): Promise<UserOutput> {
    const user = await userRepository.create(data.firstName, data.lastName);

    if (!data.citizen_id || !data.gender || !data.phone_number || !data.email) {
      throw new Error("Missing required user information fields");
    }

    const userInfo = await userInformationRepository.createUserInfo(
      user.id,
      data.citizen_id,
      data.gender,
      data.phone_number,
      data.email,
    );
    return { ...user, ...userInfo };
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
