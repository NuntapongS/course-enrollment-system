import { db } from "../database/index";
import { users } from "../database/schema";
import { UserInput, User } from "../types";
import { eq } from "drizzle-orm";

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

  async getUserById(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user
      ? {
          id: String(user.id),
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          createdAt: user.createdAt || new Date(),
        }
      : undefined;
  },

  async update(id: string, data: Partial<UserInput>): Promise<User | null> {
    const [updatedUser] = await db
      .update(users)
      .set(data)
      .where(eq(users.id, id))
      .returning();

    return updatedUser
      ? {
          id: String(updatedUser.id),
          name: `${updatedUser.firstName} ${updatedUser.lastName}`,
          email: updatedUser.email,
          createdAt: updatedUser.createdAt || new Date(),
        }
      : null;
  },
};
