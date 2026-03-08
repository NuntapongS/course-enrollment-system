import { db } from "../database/index";
import { users, user_informations } from "../database/schema";
import { UserInput, User, UserOutput } from "../types";
import { eq } from "drizzle-orm";

export const userRepository = {
  async create(firstName: string, lastName: string): Promise<UserOutput> {
    const [newUser] = await db
      .insert(users)
      .values({ firstName, lastName })
      .returning();
    return {
      id: String(newUser.id),
    };
  },

  async getAll(): Promise<User[]> {
    const allUsers = await db.select().from(users);
    return allUsers.map((user) => ({
      id: String(user.id),
      name: `${user.firstName} ${user.lastName}`,
      createdAt: user.createdAt || new Date(),
    }));
  },

  async getUserById(id: string): Promise<User> {
    const [user] = await db.select().from(users).where(eq(users.id, id));

    if (!user) {
      throw new Error("User not found");
    }

    return {
      id: String(user.id),
      name: `${user.firstName} ${user.lastName}`,
      createdAt: user.createdAt || new Date(),
    };
  },

  async update(id: string, data: Partial<UserInput>): Promise<UserOutput> {
    const [updatedUser] = await db
      .update(users)
      .set(data)
      .where(eq(users.id, id))
      .returning();

    if (!updatedUser) {
      throw new Error("User not found");
    }

    return {
      id: String(updatedUser.id),
    };
  },

  async delete(id: string): Promise<void> {
    const [deletedUser] = await db
      .delete(users)
      .where(eq(users.id, id))
      .returning();

    if (!deletedUser) {
      throw new Error("User not found");
    }
  },
};
