import { Elysia } from "elysia";
import { userRoute } from "./routes/users.routes";
import { config } from "./config";

const app = new Elysia()
  .group("/api/v1", (app) =>
    app.get("/health", () => ({ status: "ok" })).use(userRoute),
  )
  .listen(config.server.port);

console.log(
  `🦊 Elysia is running at http://${config.server.hostname}:${config.server.port}`,
);
