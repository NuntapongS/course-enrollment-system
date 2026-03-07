import { db } from "../database";
import { user_informations } from "../database/schema";
import { UserOutput } from "../types";

export const userInformationRepository = {
  async createUserInfo(
    userId: string,
    citizen_id: string,
    gender: string,
    phone_number: string,
    email: string,
  ): Promise<UserOutput> {
    const [newUserInfo] = await db
      .insert(user_informations)
      .values({
        userId: userId as string,
        citizen_id,
        gender: gender as "male" | "female" | "other",
        phone_number,
        email,
      })
      .returning();
    return {
      id: String(newUserInfo.id),
    };
  },
};
