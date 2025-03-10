import * as yup from "yup";

// Regex's
const validPassword =
  /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{6,}$/;
// const validPhone = /(^[0-9]{2})?(\s|-)?(9?[0-9]{4})-?([0-9]{4}$)/;
// const validDate = /^(\d{2})\/(\d{2})\/(\d{4})$/;

// Form validation
const requiredFieldMsg = "Campo obrigatório";
const requiredString = yup.string().required(requiredFieldMsg);
const requiredEmail = requiredString.email("Email inválido");
const currentDate = new Date();
const thresholdDate = new Date(
  currentDate.setFullYear(currentDate.getFullYear() - 18)
);

const dateValidation = yup
  .date()
  .max(thresholdDate, "Funcionário deve ser maior de idade")
  .required(requiredFieldMsg)
  .nullable()
  .transform((curr, orig) => (orig === "" ? undefined : curr))
  .default(undefined);

const requiredMinLengthString = (length) =>
  yup
    .string()
    .min(length, `Verificar valor digitado, campo ${length} caractéres.`);

const passwordValidation = yup
  .string()
  .matches(
    validPassword,
    "Senha de no mínimo 6 caracteres, pelo menos uma letra maiúscula, pelo menos uma letra minúscula, pelo menos um número, pelo menos um caractere especial"
  );

const confirmPasswordValidation = yup
  .string()
  .oneOf(
    [yup.ref("password")],
    "Confirmação de senha não coincide com senha digitada"
  );

const documentValidation = (length) =>
  yup
    .string()
    .min(length, `Verificar valor digitado, campo ${length} caractéres.`)
    .when("isEmailRequired", {
      is: true, // If state is true, validation will be triggered
      then: yup.string().required("Documento já cadastrado"),
    });

const schema = {
  firstName: requiredString,
  lastName: requiredString,
  birthdate: dateValidation,
  email: requiredEmail,
  document: documentValidation(9),
  enteredPhone: requiredMinLengthString(8),
  superior: yup.string(),
  permission: yup.string(),
  password: passwordValidation,
  confirmPassword: confirmPasswordValidation,
};

export const formSchema = yup.object(schema);
