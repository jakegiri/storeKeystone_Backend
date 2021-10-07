import { list } from "@keystone-next/keystone";
import { relationship, text, timestamp } from "@keystone-next/keystone/fields";
import { accessControls } from "../access";
import { currentTimeStamp } from "../lib/util/currentTimeStamp";

export const Product = list({
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
    price: text({ isRequired: true }),
    productImage: relationship({
      label: "Image",
      ref: "ProductImage.product",
    }),
    productCatagory: relationship({
      ref: "ProductCatagory.product",
    }),
    productInventory: relationship({
      label: "Inventory",
      ref: "ProductInventory.product",
    }),
    productDiscount: relationship({
      label: "Discount",
      ref: "ProductDiscount.product",
    }),
    createdAt: timestamp({ isRequired: true, defaultValue: currentTimeStamp }),
    modifiedAt: timestamp({ isRequired: true, defaultValue: currentTimeStamp }),
    deletedAt: timestamp({ isRequired: true, defaultValue: currentTimeStamp }),
  },
});
