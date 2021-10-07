import { list } from "@keystone-next/keystone";
import {
  password,
  relationship,
  text,
  timestamp,
} from "@keystone-next/keystone/fields";
import { accessControls } from "../access";
import { currentTimeStamp } from "../lib/util/currentTimeStamp";

export const User = list({
  access: {
    operation: {
      query:
        accessControls.operationLevel.canCRUDUsers ||
        accessControls.operationLevel.canQueryUsers,
      create: accessControls.operationLevel.canCRUDUsers,
      update: accessControls.operationLevel.canCRUDUsers,
      delete: accessControls.operationLevel.canCRUDUsers,
    },
  },
  fields: {
    email: text({ isRequired: true, isIndexed: "unique", isFilterable: true }),
    password: password({ isRequired: true }),
    name: text({ isRequired: true }),
    address: relationship({ ref: "Address.user" }),
    role: relationship({ ref: "Role.user" }),
    createdAt: timestamp({ defaultValue: currentTimeStamp, isRequired: true }),
    modifiedAt: timestamp({ defaultValue: currentTimeStamp, isRequired: true }),
  },
  ui: {
    listView: {
      initialColumns: ["name", "email"],
    },
  },
});
