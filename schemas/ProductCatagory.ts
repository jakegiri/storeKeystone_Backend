import { list } from "@keystone-next/keystone";
import { relationship, text, timestamp } from "@keystone-next/keystone/fields";
import { accessControls } from "../access";
import { currentTimeStamp } from "../lib/util/currentTimeStamp";

export const ProductCatagory = list({
  access: {
    operation: {
      query:
        accessControls.operationLevel.canQueryProducts ||
        accessControls.operationLevel.canCRUDProducts,
      create: accessControls.operationLevel.canCRUDProducts,
      update: accessControls.operationLevel.canCRUDProducts,
      delete: accessControls.operationLevel.canCRUDProducts,
    },
  },
  fields: {
    name: text({ isRequired: true }),
    description: text({ isRequired: true }),
    product: relationship({ ref: "Product.ProductCatagory", many: true }),
    createdAt: timestamp({ isRequired: true, defaultValue: currentTimeStamp }),
    modifiedAt: text({ isRequired: true, defaultValue: currentTimeStamp }),
    deletedAt: text({ isRequired: true, defaultValue: currentTimeStamp }),
  },
});
