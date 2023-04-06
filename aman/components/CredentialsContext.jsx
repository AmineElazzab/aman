import {createContext} from 'react';

// credentials context
export const CredentialsContext = createContext({
  storedCredentials: {
    token: '',
    fullName: '',
    email: '',
    userId: '',
  },
  setStoredCredentials: () => {},
});
