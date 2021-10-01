import { list } from "@keystone-next/keystone";
import { relationship, text } from "@keystone-next/keystone/fields";
import { accessControls } from "../access";

export const Address = list({
  access: {
    filter: {
      query: accessControls.filterLevel.canQueryUsers,
      update: accessControls.filterLevel.canCRUDUsers,
    },
  },
  fields: {
    address: text({ isRequired: true }),
    mobileNumber: text({ isRequired: true }),
    pincode: text({ isRequired: true }),
    city: text({ isRequired: true, defaultValue: "Guwahati" }),
    state: text({ isRequired: true, defaultValue: "Assam" }),
    user: relationship({ ref: "User.address" }),
  },
  ui: {
    listView: {
      initialColumns: ["user", "mobileNumber", "pincode"],
    },
  },
});
