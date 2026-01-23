export type UserInput = {
  firstName: string;
  lastName: string;
  email: string;
};

export type UserOutput = {
  id: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
};
