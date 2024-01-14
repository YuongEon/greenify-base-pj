import { createSlice } from '@reduxjs/toolkit';

import { handleLogin } from '~/thunks/auth/authThunk';
import { StorageEnum } from '~/utils/enum';

export interface AuthState {
  accessToken: string | null | undefined;
}

const initialState: AuthState = {
  accessToken: localStorage.getItem(StorageEnum.ACCESS_TOKEN)! || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    handleLogout() {
      localStorage.removeItem(StorageEnum.ACCESS_TOKEN);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(handleLogin.pending, (state, action) => {})
      .addCase(handleLogin.fulfilled, (state, action) => {
        state.accessToken = action.payload;
      })
      .addCase(handleLogin.rejected, (state, action) => {});
  },
});

export const authActions = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
