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
    filter: {
      query: accessControls.filterLevel.canQueryUsers,
      update: accessControls.filterLevel.canCRUDUsers,
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
