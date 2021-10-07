import { list } from "@keystone-next/keystone";
import { relationship, text, timestamp } from "@keystone-next/keystone/fields";
import { accessControls } from "../access";
import { currentTimeStamp } from "../lib/util/currentTimeStamp";

export const ProductInventory = list({
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
    quantity: text({ isRequired: true }),
    product: relationship({ ref: "Product.ProductInventory" }),
    createdAt: timestamp({ isRequired: true, defaultValue: currentTimeStamp }),
    modifiedAt: timestamp({ isRequired: true, defaultValue: currentTimeStamp }),
    deletedAt: timestamp({ isRequired: true, defaultValue: currentTimeStamp }),
  },
});
