import { createSchema } from "@keystone-next/keystone";

// import { Role } from "./schemas/Role";
import { User, Role, Address } from "./schemas";

export const lists = createSchema({
  Role,
  User,
  Address,
});
