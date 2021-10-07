import { createSchema } from "@keystone-next/keystone";

import {
  User,
  Role,
  Address,
  Product,
  ProductCatagory,
  ProductInventory,
  ProductDiscount,
  ProductImage,
} from "./schemas";

//################################################
//################################################
//################################################
//################################################

export const lists = createSchema({
  Role,
  User,
  Address,
  Product,
  ProductImage,
  ProductCatagory,
  ProductInventory,
  ProductDiscount,
});
