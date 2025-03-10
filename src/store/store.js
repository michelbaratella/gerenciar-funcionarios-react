import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../slices/employeesSlice";
import formReducer from "../slices/formSlice";

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
    form: formReducer,
  },
});
