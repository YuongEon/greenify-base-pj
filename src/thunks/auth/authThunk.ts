import { createAsyncThunk } from '@reduxjs/toolkit';

import { LOGIN } from '~/utils/constants/actionType';
import { RolesEnum, StorageEnum } from '~/utils/enum';
import { ILoginPayload } from '~/utils/interface/auth';

export const handleLogin = createAsyncThunk(LOGIN, async (payload: ILoginPayload, { rejectWithValue }) => {
  try {
    if (payload.username === 'admin' && payload.password === '123456') {
      localStorage.setItem(StorageEnum.ACCESS_TOKEN, RolesEnum.ADMIN);
      return RolesEnum.ADMIN;
    }
  } catch (error) {
    return rejectWithValue(error);
  }
});
