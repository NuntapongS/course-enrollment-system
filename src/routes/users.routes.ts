import Elysia, { t } from "elysia";
import { userHandler } from "../handlers/user.handler";

export const userRoute = new Elysia({ prefix: "/users" })
  .post(
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
  )

  .get("/", async () => {
    return await userHandler.getAll();
  })

  .get("/:id", async ({ params }) => {
    return await userHandler.getUserById(params.id);
  })

  .patch(
    "/:id",
    async ({ params, body }) => {
      return await userHandler.updateUser(params.id, body);
    },
    {
      body: t.Object({
        firstName: t.Optional(t.String()),
        lastName: t.Optional(t.String()),
        email: t.Optional(t.String({ format: "email" })),
      }),
    },
  );
