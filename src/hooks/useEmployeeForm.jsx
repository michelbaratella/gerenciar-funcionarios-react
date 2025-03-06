import { useState } from "react";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  document: "",
  enteredPhone: "",
  enteredPhoneType: "residencial",
  phoneList: [], // [ {phone: "", type: ""}, ...]
};

export default function useEmployeeForm() {
  const [enteredValues, setEnteredValues] = useState(initialValues);

  function updateEmployeeForm(formfield, enteredValue) {
    setEnteredValues((prevValues) => {
      let updatedValue = enteredValue;
      if (formfield === "phoneList") {
        const updatedList = [...prevValues.phoneList];
        updatedList.unshift(enteredValue);
        updatedValue = updatedList;
      }
      return {
        ...prevValues,
        [formfield]: updatedValue,
      };
    });
  }

  return { enteredValues, updateEmployeeForm };
}
