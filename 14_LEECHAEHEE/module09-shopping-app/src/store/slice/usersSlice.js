import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: { currentUser: { id: 2, name: 'Alice' } },
  reducers: {},
});

export default usersSlice.reducer;
