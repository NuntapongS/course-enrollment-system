import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql", // เปลี่ยนเป็น "mysql2" หรือ "sqlite" ตามต้องการ
  dbCredentials: {
    url: process.env.DATABASE_URL || "postgresql://user:password@localhost:5432/dbname",
  },
});
