export const config = {
  server: {
    port: parseInt(process.env.PORT || "3000"),
    hostname: process.env.HOSTNAME || "localhost",
  },
  database: {
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"),
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "course_enrollment_system",
  },
  env: process.env.NODE_ENV || "development",
};
