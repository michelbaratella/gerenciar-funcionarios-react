import { createSlice } from "@reduxjs/toolkit";
import { isUniquePhone, notEmpty } from "../util/validations";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  document: "",
  enteredPhone: "",
  enteredPhoneType: "residencial",
  phoneList: [], // [ {phone: "", type: ""}, ...]
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    /* update: update padrão para atualização de valores */
    update: (state, action) => {
      state[action.payload.formfield] = action.payload.enteredValue;
    },
    /* addPhone: verifica se o telefone digitado já foi cadastrado, se sim limpa o campo de telefone não faz nada */
    addPhone: (state) => {
      const type = state.enteredPhoneType;
      const phone = state.enteredPhone;
      if (notEmpty(phone) && isUniquePhone(phone, state.phoneList)) {
        state.phoneList.push({
          id: type + phone,
          phone: phone,
          type: type,
        });
      }
      (state.enteredPhone = ""), (state.enteredPhoneType = "residencial");
    },
    /* removePhone: remove telefone previamente cadastrado da lista de telefones, utiliza combinação de phone+type para comparacão de objetos por id */
    removePhone: (state, action) => {
      state.phoneList = state.phoneList.filter(
        (obj) => obj.id !== action.payload
      );
    },
  },
});

export const { update, addPhone, removePhone } = formSlice.actions;

export default formSlice.reducer;
