import { db } from "../database/index";
import { users } from "../database/schema";
import { UserInput, User, UserOutput } from "../types";
import { eq } from "drizzle-orm";

export const userRepository = {
  async create(data: UserInput): Promise<UserOutput> {
    const [newUser] = await db.insert(users).values(data).returning();
    return {
      id: String(newUser.id),
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

  async update(
    id: string,
    data: Partial<UserInput>,
  ): Promise<UserOutput | null> {
    const [updatedUser] = await db
      .update(users)
      .set(data)
      .where(eq(users.id, id))
      .returning();

    return updatedUser
      ? {
          id: String(updatedUser.id),
        }
      : null;
  },

  async delete(id: string): Promise<void> {
    await db.delete(users).where(eq(users.id, id));
  },
};
