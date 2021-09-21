import { createSchema } from "@keystone-next/keystone";

import { Role } from "./schema/Role";
import { User } from "./schema";

export const lists = createSchema({
  Role,
  User,
});
