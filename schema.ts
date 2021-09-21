import { createSchema } from "@keystone-next/keystone";

import { Role } from "./schemas/Role";
import { User } from "./schemas";

export const lists = createSchema({
  Role,
  User,
});
