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
};
