import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import { purgeStoredState } from "redux-persist";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
  },
  reducers: {
    createUser: (state, action) => {
      state.data = action.payload;
    },
    removeUser: (state) => {
      const persistConfig = {
        key: "root",
        storage: AsyncStorage,
      };
      state.data = [];
      purgeStoredState(persistConfig);
    },
  },
});

export const { createUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
