import { createSchema } from "@keystone-next/keystone";

import { Role } from "./schema/Role";
import { User } from "./schema/User";

export const lists = createSchema({
  Role,
  User,
});
