import { list } from "@keystone-next/keystone";
import {
  checkbox,
  relationship,
  text,
  timestamp,
} from "@keystone-next/keystone/fields";
import { accessControls } from "../access";
import { currentTimeStamp } from "../lib/util/currentTimeStamp";

export const ProductDiscount = list({
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
    discountPercent: text({ isRequired: true }),
    active: checkbox({ isRequired: true }),
    product: relationship({ ref: "Product.ProductDiscount", many: true }),
    createdAt: timestamp({ isRequired: true, defaultValue: currentTimeStamp }),
    modifiedAt: timestamp({ isRequired: true, defaultValue: currentTimeStamp }),
    deletedAt: timestamp({ isRequired: true, defaultValue: currentTimeStamp }),
  },
});
