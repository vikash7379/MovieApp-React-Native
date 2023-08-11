import { purgeStoredState } from "redux-persist";

export const logoutUser = (persistConfig) => {
  // Clear persisted state for user
  purgeStoredState(persistConfig);

  // Other logout-related logic
};
