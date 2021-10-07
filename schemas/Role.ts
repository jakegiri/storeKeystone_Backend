import { list } from "@keystone-next/keystone";
import { relationship, text } from "@keystone-next/keystone/fields";
import { accessControls } from "../access";
import { permissionFields } from "./fields";

export const Role = list({
  access: {
    operation: {
      query: accessControls.operationLevel.canCRUDRoles,
      create: accessControls.operationLevel.canCRUDRoles,
      update: accessControls.operationLevel.canCRUDRoles,
      delete: accessControls.operationLevel.canCRUDRoles,
    },
  },
  fields: {
    name: text({ isRequired: true }),
    ...permissionFields,
    user: relationship({
      ref: "User.role",
      many: true,
    }),
  },
});
