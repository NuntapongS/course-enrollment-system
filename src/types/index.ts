export type UserInput = {
  firstName: string;
  lastName: string;
  citizen_id?: string;
  gender?: "male" | "female" | "other";
  phone_number?: string;
  email?: string;
};

export type UserOutput = {
  id: string;
};

export type User = {
  id: string;
  name: string;
  createdAt: Date;
};
