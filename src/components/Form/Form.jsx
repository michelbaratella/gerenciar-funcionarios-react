import Input from "../UI/Input";
import Select from "../UI/Select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./form-validation";
import { employeeList, permissions } from "../../util/constants";
import { useState } from "react";
import RemoveButtonIcon from "../UI/RemoveButtonIcon";
import { useDispatch, useSelector } from "react-redux";
import { addNewEmployee } from "../../slices/employeesSlice";
import { addInput } from "../../slices/formSlice";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { validationError } = useSelector((state) => state.employees);

  const dispatch = useDispatch();
  const [phoneList, setPhoneList] = useState([]);

  function addPhoneToList(phone) {
    setPhoneList((prevList) => {
      const updatedPhoneList = [...prevList, phone];
      return updatedPhoneList;
    });
  }

  function handleAddPhone() {
    const enteredPhone = watch("enteredPhone");
    if (
      enteredPhone &&
      enteredPhone.length > 7 &&
      !phoneList.includes(enteredPhone) &&
      !errors.enteredPhone
    ) {
      addPhoneToList(enteredPhone);
      resetField("enteredPhone");
    } else {
      trigger("enteredPhone");
    }
  }

  function handleRemovePhone(selectedPhone) {
    const updatedPhoneList = phoneList.filter(
      (listItem) => listItem !== selectedPhone
    );
    setPhoneList(updatedPhoneList);
  }

  // let newFieldCount = useRef(0);
  function handleAddNewField() {
    // newFieldCount.current++;
    dispatch(addInput({ id: "id", label: "label" }));
  }

  const onSubmit = (data) => {
    if (data.enteredPhone && !phoneList.includes(data.enteredPhone)) {
      addPhoneToList(data.enteredPhone);
    }

    const formData = {
      name: data.firstName + " " + data.lastName,
      email: data.email,
      document: data.document,
      phoneList: phoneList,
      superior: data.superior,
      permission: data.permission,
      password: data.password,
    };

    dispatch(addNewEmployee(formData));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded p-5 text-center shadow-2xl mt-10 w-lg mx-auto"
    >
      <Input
        placeholder="Nome"
        {...register("firstName")}
        errors={errors.firstName?.message}
      />
      <Input
        placeholder="Sobrenome"
        {...register("lastName")}
        errors={errors.lastName?.message}
      />
      <Input
        label="Data de nascimento"
        type="date"
        {...register("birthdate")}
        errors={errors.birthdate?.message}
      />
      <Input
        placeholder="Email"
        {...register("email")}
        errors={errors.email?.message}
      />
      <Input
        placeholder="Documento (RG/CPF)"
        {...register("document")}
        errors={errors.document?.message || validationError}
      />
      <Input
        {...register("enteredPhone")}
        placeholder="Telefone"
        addBtn
        onClickAddPhone={handleAddPhone}
        errors={errors.enteredPhone?.message}
      />
      {phoneList.length > 0 &&
        phoneList.map((phone) => {
          return (
            <span className="p-2 flex gap-2" key={phone}>
              <Input value={phone} readOnly />
              <RemoveButtonIcon onClick={() => handleRemovePhone(phone)} />
            </span>
          );
        })}
      <Select
        title="Gestor"
        options={employeeList}
        label="name"
        {...register("superior")}
      />
      <Select
        title="Pemissões"
        options={permissions}
        label="label"
        {...register("permission")}
      />
      <Input
        placeholder="Senha"
        {...register("password")}
        errors={errors.password?.message}
      />
      <Input
        placeholder="Confirmar senha"
        {...register("confirmPassword")}
        errors={errors.confirmPassword?.message}
      />
      {/* Custom input here */}
      <p>
        <button
          type="button"
          className="p-3 rounded text-white bg-green-700 mt-5 cursor-pointer"
          onClick={handleAddNewField}
        >
          Adicionar novo campo
        </button>
      </p>
      <button
        type="submit"
        className="p-3 rounded text-white bg-blue-700 mt-5 cursor-pointer"
      >
        Salvar
      </button>
    </form>
  );
}
