import { checkbox } from "@keystone-next/keystone/fields";

export const permissionFields = {
  canCRUDProducts: checkbox({
    defaultValue: false,
    label: "Can CRUD any product",
  }),
  canQueryUsers: checkbox({
    defaultValue: false,
    label: "Can query other users",
  }),
  canCRUDUsers: checkbox({
    defaultValue: false,
    label: "Can CRUD other users",
  }),
  canCRUDRoles: checkbox({
    defaultValue: false,
    label: "Can CRUD other roles",
  }),
  canCRUDCart: checkbox({
    defaultValue: false,
    label: "Can CRUD cart and cart items",
  }),
  canCRUDOrders: checkbox({
    defaultValue: false,
    label: "Can CRUD orders",
  }),
};

export type PermissionName = keyof typeof permissionFields;

export const permissionList: PermissionName[] = Object.keys(
  permissionFields
) as PermissionName[];
