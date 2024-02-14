import toast from 'react-hot-toast';
import {
  registerUser,
  logInUser,
  logOut,
  refreshing,
  update,
  updateAvatar,
  changeTheme,
} from './authOperation';

import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'userInfo',
  initialState: {
    user: {
      name: '',
      email: '',
      avatarURL: '',
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        toast.success('Welcome in your Home Page');
      })
      .addCase(registerUser.rejected, () => toast.error('User is alredy exist'))
      .addCase(logInUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logInUser.rejected, () =>
        toast.error('Email or password is not correct')
      )
      .addCase(logOut.fulfilled, state => {
        state.user = { name: '', email: '' };
        state.isLoggedIn = false;
        state.token = null;
        toast.success('Welcome in your Home Page');
      })
      .addCase(refreshing.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshing.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshing.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(update.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload;
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(changeTheme.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      }),
});
