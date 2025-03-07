import Input from "./UI/Input";
import Submit from "./UI/Submit";
import PhoneInput from "./UI/PhoneInput";
import AddButtonIcon from "./UI/AddButtonIcon";
import PhoneListOutput from "./UI/PhoneListOutput";

import { useSelector, useDispatch } from "react-redux";
import { addPhone, update } from "../slices/formSlice";
import { maskCpfOrRg } from "../util/validations";

export default function EmployeeForm() {
  const form = useSelector((state) => state.form);
  const {
    firstName,
    lastName,
    email,
    document,
    enteredPhone,
    enteredPhoneType,
  } = form;
  const dispatch = useDispatch();

  function handleSubmitForm(e) {
    e.preventDefault();
    console.log(form);
  }

  function handleChange(e) {
    dispatch(
      update({
        formfield: e.target.name,
        enteredValue: e.target.value,
      })
    );
  }

  function handleAddPhone() {
    dispatch(addPhone());
  }

  return (
    <form onSubmit={handleSubmitForm} className="items-center">
      <p className="p-2 flex gap-2">
        <Input
          label="Nome"
          id="firstName"
          required
          value={firstName}
          onChange={handleChange}
        />
        <Input
          label="Sobrenome"
          id="lastName"
          required
          value={lastName}
          onChange={handleChange}
        />
      </p>

      <p className="p-2 flex gap-2">
        <Input
          id="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={handleChange}
        />
        <Input placeholder="Confirmar email" onChange={handleChange} />
      </p>

      <p className="p-2 flex gap-2">
        <Input
          label="Documento"
          id="document"
          required
          value={maskCpfOrRg(document)}
          onChange={handleChange}
        />
      </p>

      <p className="p-2 flex gap-2">
        <PhoneInput
          onChange={handleChange}
          enteredPhone={enteredPhone}
          enteredPhoneType={enteredPhoneType}
          onBlur={handleAddPhone}
        />
        <AddButtonIcon onClick={handleAddPhone} />
      </p>

      <PhoneListOutput />

      <Submit />
    </form>
  );
}
