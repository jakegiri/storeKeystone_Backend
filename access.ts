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
      console.log(session?.itemId);
      return { id: session?.itemId };
    },
  };
}

export const accessControls = new AccessControls();
