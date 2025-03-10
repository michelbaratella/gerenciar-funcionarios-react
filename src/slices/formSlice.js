import { createSlice } from "@reduxjs/toolkit";
import { initialFormSliceState } from "../util/constants";

export const formSlice = createSlice({
  name: "form",
  initialState: { fieldList: initialFormSliceState },
  reducers: {
    addInput: (state, action) => {
      state.fieldList.push({
        id: action.payload.id,
        label: action.payload.label,
      });
      console.log(state.fieldList);
    },
  },
});

export const { addInput } = formSlice.actions;

export default formSlice.reducer;
