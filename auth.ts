import { createAuth } from "@keystone-next/auth";
import { permissionList } from "./schemas/fields/permissionFields";

let sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "The SESSION_SECRET environment variable must be set in production"
    );
  } else {
    sessionSecret = "-- DEV COOKIE SECRET; CHANGE ME --";
  }
}

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  sessionData: `id name role { ${permissionList.join(" ")}}`,
  initFirstItem: {
    fields: ["name", "email", "password"],
  },
});

export { withAuth, sessionSecret };
