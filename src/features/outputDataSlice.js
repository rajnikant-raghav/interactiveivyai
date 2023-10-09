import { createSlice } from "@reduxjs/toolkit";

export const outputDataSlice = createSlice({
  name: "output",
  initialState: {
    data: [],
  },
  reducers: {
    setOutput: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { setOutput } = outputDataSlice.actions;
export default outputDataSlice.reducer;
