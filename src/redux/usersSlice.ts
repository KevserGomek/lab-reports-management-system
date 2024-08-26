import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: number;
  username: string;
  role: string;
  password: string;
}

interface UsersState {
  users: User[];
  currentUser: User | null;
}

const initialState: UsersState = {
  users: [
    {
      id: 1,
      role: 'admin',
      password: 'admin123',
      username: 'admin',
    },
    {
      id: 2,
      role: 'reader',
      password: 'reader123',
      username: 'reader1',
    },
  ],
  currentUser: null,
};

const userSlice = createSlice({

  name: 'users',
  initialState,
  reducers: {

    setCurrentUser: (state, action: PayloadAction<number>) => {
      const user = state.users.find((user) => user.id === action.payload);
      if (user) {
        state.currentUser = user;
      }
    },

    clearCurrentUser: (state) => {
      state.currentUser = null;
    },

  },
  
});

export const { setCurrentUser, clearCurrentUser } = userSlice.actions;
export default userSlice.reducer;