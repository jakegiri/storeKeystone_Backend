import { list } from "@keystone-next/keystone";
import {
  password,
  relationship,
  text,
  timestamp,
  virtual,
} from "@keystone-next/keystone/fields";
import { accessControls } from "../access";
import { currentTimeStamp } from "../lib/util/currentTimeStamp";

export const User = list({
  access: {
    operation: {
      query: accessControls.operationLevel.canManageUsers,
    },
    // filter: {
    //   query: accessControls.filterLevel.canManageUsers,
    //   update: accessControls.filterLevel.canManageUsers,
    // },
  },
  fields: {
    email: text({ isRequired: true, isIndexed: "unique", isFilterable: true }),
    password: password({ isRequired: true }),
    name: text({ isRequired: true }),
    role: relationship({ ref: "Role.assignedTo" }),
    createdAt: timestamp({ defaultValue: currentTimeStamp, isRequired: true }),
    modifiedAt: timestamp({ defaultValue: currentTimeStamp, isRequired: true }),
  },
  ui: {
    listView: {
      initialColumns: ["name", "email"],
    },
  },
});