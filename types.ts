import { PermissionName } from "./schemas/fields/permissionFields";
import { KeystoneContext } from "@keystone-next/keystone/types";
//################################################################

export { PermissionName };

export type Session = {
  itemId: string;
  listKey: string;
  data: {
    id: string;
    name: string;
    role?: {
      id: string;
      name: string;
    } & {
      [key in PermissionName]: boolean;
    };
  };
};

export interface ListAccessArgs {
  session?: Session;
  context?: KeystoneContext;
  listKey?: string;
  operation?: "query" | "create" | "update" | "delete";
  // originalInput?: any;
  // item: any;
}

export interface FieldAccessArgs extends ListAccessArgs {
  fieldKey: string;
}
