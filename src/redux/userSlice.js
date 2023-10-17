import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('user/signup', async () => {
    const response = await fetch('https://api.example.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const data = await response.json();
    return data;
  });
  
  const userSlice = createSlice({
    name: 'user',
    initialState: {
      users: [],
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchUsers.pending, (state) => {
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {;
          state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
          state.error = action.error.message;
        });
    },
  });
  
  export default userSlice.reducer;