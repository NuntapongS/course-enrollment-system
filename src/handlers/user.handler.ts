import { userService } from "../services/user.service";
import { UserInput } from "../types";

export const userHandler = {
  async create(body: UserInput) {
    try {
      const result = await userService.create(body);
      return result;
    } catch (err) {
      console.error("Create user error:", err);
      throw err;
    }
  },

  async getAll() {
    try {
      return await userService.getAll();
    } catch (err) {
      console.error("Get all users error:", err);
      throw err;
    }
  },

  async getUserById(id: string) {
    try {
      const user = await userService.getUserById(id);
      if (!user) {
        return { error: "User not found" };
      }
      return user;
    } catch (err) {
      console.error("Get user by id error:", err);
      throw err;
    }
  },
};
