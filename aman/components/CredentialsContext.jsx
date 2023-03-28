import { createContext } from "react";

// credentials context
export const CredentialsContext = createContext({
  storedCredentials: {},
  setStoredCredentials: () => {},
});