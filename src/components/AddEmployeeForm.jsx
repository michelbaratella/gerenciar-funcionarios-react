import Input from "./UI/Input";
import Submit from "./UI/Submit";
import PhoneInput from "./UI/PhoneInput";
import AddPhoneIcon from "./UI/AddPhoneIcon";
import useEmployeeForm from "../hooks/useEmployeeForm";

export default function AddEmployeeForm() {
  const {
    enteredValues: {
      firstName,
      lastName,
      email,
      document,
      enteredPhone,
      enteredPhoneType,
      phoneList,
    },
    updateEmployeeForm,
  } = useEmployeeForm();

  function handleSubmitForm(e) {
    e.preventDefault();
    console.log(enteredValues);
  }

  function handleBlur(e) {
    if (e.target.name === "phone") {
      updatePhoneList(e.target.value);
    }
  }

  function handleChange(e) {
    console.log(e.target.name);
    console.log(e.target.value);

    updateEmployeeForm(e.target.name, e.target.value);
  }

  function handleAddPhone() {
    if (enteredPhone.trim() !== "") {
      updateEmployeeForm("phoneList", {
        phone: enteredPhone,
        type: enteredPhoneType,
      });

      updateEmployeeForm("enteredPhone", "");
    }
  }

  return (
    <form onSubmit={handleSubmitForm} className="items-center">
      <p className="p-2 flex gap-2">
        <Input
          label="Nome"
          id="firstName"
          required
          value={firstName}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <Input
          label="Sobrenome"
          id="lastName"
          required
          value={lastName}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </p>

      <p className="p-2 flex gap-2">
        <Input
          label="E-mail"
          id="email"
          type="email"
          required
          value={email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </p>

      <p className="p-2 flex gap-2">
        <Input
          label="Documento"
          id="document"
          required
          value={document}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </p>

      <p className="p-2 flex gap-2">
        <PhoneInput
          onChange={handleChange}
          enteredPhone={enteredPhone}
          enteredPhoneType={enteredPhoneType}
        />
        <AddPhoneIcon onClick={handleAddPhone} />
      </p>

      {phoneList.length > 0 &&
        phoneList.map((obj) => (
          <p className="p-2 flex gap-2" key={obj.phone}>
            <Input
              value={`${obj.type}: ${obj.phone}`}
              readOnly
              id={obj.phone}
            />
          </p>
        ))}

      <Submit />
    </form>
  );
}
