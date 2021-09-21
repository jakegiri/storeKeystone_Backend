import { list } from "@keystone-next/keystone";
import { relationship, text } from "@keystone-next/keystone/fields";
import { permissionFields } from "./fields";

export const Role = list({
  fields: {
    name: text({ isRequired: true }),
    ...permissionFields,
    assignedTo: relationship({
      ref: "User.role",
      many: true,
    }),
  },
});
