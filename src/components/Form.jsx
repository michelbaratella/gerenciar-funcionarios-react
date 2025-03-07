import Input from "./form-components/Input";
import Select from "./form-components/Select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./form-utils/form-validation";
import { employeeList } from "../util/constants";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded p-5 text-center shadow-2xl mt-20"
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
        errors={errors.document?.message}
      />
      <Input
        placeholder="Telefone"
        {...register("phone")}
        errors={errors.phone?.message}
      />
      {/* Select para gestor (componente com busca filtro e dropdown) */}
      <Select title="Gestor" options={employeeList} label="name" />
      {/* Permissão, select com permissões possíveis */}
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
      {/* Campo de input customizável, usuário pode escolher label do campo e entrar com o valor desejado */}
      <button type="submit" className="p-1 rounded border-1 mt-5">
        Salvar
      </button>
    </form>
  );
}
