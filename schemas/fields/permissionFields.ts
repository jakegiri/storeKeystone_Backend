import { checkbox } from "@keystone-next/keystone/fields";

export const permissionFields = {
  canQueryUsers: checkbox({
    defaultValue: false,
    label: "Can read other users",
  }),
  canCRUDUsers: checkbox({
    defaultValue: false,
    label: "Can CRUD other users",
  }),
  canDeleteUsers: checkbox({
    defaultValue: false,
    label: "Can delete other users",
  }),
  canQueryProducts: checkbox({
    defaultValue: false,
    label: "Can query other users",
  }),
  canCRUDProducts: checkbox({
    defaultValue: false,
    label: "Can CRUD any product",
  }),
  canDeleteProducts: checkbox({
    defaultValue: false,
    label: "Can delete any product",
  }),
  canQueryCart: checkbox({
    defaultValue: false,
    label: "Can query cart",
  }),
  canCRUDCart: checkbox({
    defaultValue: false,
    label: "Can CRUD cart and cart items",
  }),
  canDeleteCart: checkbox({
    defaultValue: false,
    label: "Can delete cart",
  }),
  canQueryOrders: checkbox({
    defaultValue: false,
    label: "Can query orders",
  }),
  canCRUDOrders: checkbox({
    defaultValue: false,
    label: "Can CRUD orders",
  }),
  canCRUDRoles: checkbox({
    defaultValue: false,
    label: "Can CRUD other roles",
  }),
};

export type PermissionName = keyof typeof permissionFields;

export const permissionList: PermissionName[] = Object.keys(
  permissionFields
) as PermissionName[];
