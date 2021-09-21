import { permissionList } from "./schema/fields/permissionFields";
import { ListAccessArgs, PermissionName } from "./types";

//==============  TYPES =====================
type GeneratedOperationAcessControl = {
  [key in PermissionName]: ({ session }: ListAccessArgs) => boolean;
};

//##################################################################
//##################################################################

class AccessControls {
  private _generatedOperation: GeneratedOperationAcessControl =
    Object.fromEntries(
      permissionList.map((permisssionName: PermissionName) => [
        permisssionName,
        ({ session }: ListAccessArgs) =>
          !!session?.data.role?.[permisssionName],
      ])
    ) as GeneratedOperationAcessControl;

  isSignedIn = ({ session }: ListAccessArgs) => !!session;

  operationLevel = {
    ...this._generatedOperation,
  };

  filterLevel = {
    canManageUsers: ({ session }: ListAccessArgs) => {
      // Is Signed In?
      if (!this.isSignedIn({ session })) return false;

      // Do they have permission to manageRole?
      if (this.operationLevel.canManageUsers({ session })) return true;

      // IF not , do they own this item?
      return { id: { equals: session?.itemId } };
    },
  };
}

export const accessControls = new AccessControls();
