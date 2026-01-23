import { db } from "../database/index";
import { users } from "../database/schema";
import { UserInput, User } from "../types";

export const userRepository = {
  async create(data: UserInput): Promise<User> {
    const [newUser] = await db.insert(users).values(data).returning();
    return {
      id: String(newUser.id),
      name: `${newUser.firstName} ${newUser.lastName}`,
      email: newUser.email,
      createdAt: newUser.createdAt || new Date(),
    };
  },

  async getAll(): Promise<User[]> {
    const allUsers = await db.select().from(users);
    return allUsers.map((user) => ({
      id: String(user.id),
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      createdAt: user.createdAt || new Date(),
    }));
  },
};
