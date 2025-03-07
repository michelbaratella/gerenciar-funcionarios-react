export const phoneTypeList = [
  { value: "residencial", label: "Residencial" },
  { value: "celular", label: "Celular" },
  { value: "outro", label: "Outro" },
];

export const employeeList = [
  {
    id: "1",
    name: "Boss Doe",
    email: "joao@doe",
    document: "99999999999",
    phoneList: [
      {
        id: "celular199999999999",
        phone: "199999999999",
        type: "celular",
      },
    ],
    superior: "Boss da Silva",
    permissão: "gerente",
  },
  {
    id: "2",
    name: "João Doe",
    email: "joao@doe",
    document: "12345678912",
    phoneList: [
      {
        id: "celular199999999999",
        phone: "199999999999",
        type: "celular",
      },
    ],
    superior: "Fulano da Silva",
    permissão: "funcionario",
  },
  {
    id: "3",
    name: "Maria Doe",
    fullName: "João Doe",
    email: "joao@doe",
    document: "11111111111",
    phoneList: [
      {
        id: "celular199999999999",
        phone: "199999999999",
        type: "celular",
      },
    ],
    superior: "Fulano da Silva",
    permissão: "funcionario",
  },
  {
    id: "4",
    name: "James Doe",
    email: "joao@doe",
    document: "22222222222",
    phoneList: [
      {
        id: "celular199999999999",
        phone: "199999999999",
        type: "celular",
      },
    ],
    superior: "Fulano da Silva",
    permissão: "funcionario",
  },
];
