CREATE TABLE "users" (
	"id" uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
