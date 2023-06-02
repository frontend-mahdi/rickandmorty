import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialStateTypes = {
  dates: string[] | null;
};

const initialState: InitialStateTypes = {
  dates: null,
};

const slice = createSlice({
  name: "panel",
  initialState,
  reducers: {
    setDates: (state, action: PayloadAction<string[] | null>) => {
      state.dates = action.payload;
    },
  },
});
export default slice.reducer;

//Actions
export const { setDates } = slice.actions;

//functions
