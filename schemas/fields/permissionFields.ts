import { checkbox } from "@keystone-next/keystone/fields";

export const permissionFields = {
  canManageProducts: checkbox({
    defaultValue: false,
    label: "User can update and delete any product",
  }),
  canSeeOtherUsers: checkbox({
    defaultValue: false,
    label: "User can query other users",
  }),
  canManageUsers: checkbox({
    defaultValue: false,
    label: "User can Edit other users",
  }),
  canManageRoles: checkbox({
    defaultValue: false,
    label: "User can CRUD roles",
  }),
  canManageCart: checkbox({
    defaultValue: false,
    label: "User can see and manage cart and cart items",
  }),
  canManageOrders: checkbox({
    defaultValue: false,
    label: "User can see and manage orders",
  }),
};

export type PermissionName = keyof typeof permissionFields;

export const permissionList: PermissionName[] = Object.keys(
  permissionFields
) as PermissionName[];
