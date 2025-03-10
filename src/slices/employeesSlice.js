import { createSlice } from "@reduxjs/toolkit";
import { employeeList } from "../util/constants";

export const employeesSlice = createSlice({
  name: "employees",
  initialState: { existingEmployees: employeeList, validationError: [] },
  reducers: {
    addNewEmployee: (state, action) => {
      const newEmployee = action.payload;
      const alreadyExists = state.existingEmployees.find(
        (item) => item.document === action.payload.document
      );
      if (alreadyExists) {
        state.validationError = "O documento digitado já está cadastrado";
      } else {
        state.existingEmployees.push({
          id: newEmployee.document,
          ...newEmployee,
        });
      }
    },
  },
});

export const { addNewEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;
