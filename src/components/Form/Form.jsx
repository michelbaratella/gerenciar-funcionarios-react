import Input from "../UI/Input";
import Select from "../UI/Select";
import Phonelist from "../Phonelist";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./form-validation";
import { employeeList, permissions } from "../../util/constants";
import { addNewEmployee } from "../../slices/employeesSlice";

export default function Form() {
  const dispatch = useDispatch();
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
      enteredPhone.length >= 8 &&
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

  const onSubmit = (data) => {
    if (data.enteredPhone && !phoneList.includes(data.enteredPhone)) {
      addPhoneToList(data.enteredPhone);
    }

    dispatch(
      addNewEmployee({
        name: data.firstName + " " + data.lastName,
        email: data.email,
        document: data.document,
        phoneList: phoneList,
        superior: data.superior,
        permission: data.permission,
        password: data.password,
      })
    );
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
      <Phonelist phoneList={phoneList} onRemovePhone={handleRemovePhone} />
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
      <button
        type="submit"
        className="p-3 rounded text-white bg-blue-700 mt-5 cursor-pointer"
      >
        Salvar
      </button>
    </form>
  );
}
