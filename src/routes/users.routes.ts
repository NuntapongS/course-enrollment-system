import Elysia, { t } from "elysia";
import { userHandler } from "../handlers/user.handler";

export const userRoute = new Elysia({ prefix: "/users" }).post(
  "/",
  async ({ body }) => {
    return await userHandler.create(body);
  },
  {
    body: t.Object({
      firstName: t.String(),
      lastName: t.String(),
      email: t.String({ format: "email" }),
    }),
  },
);
