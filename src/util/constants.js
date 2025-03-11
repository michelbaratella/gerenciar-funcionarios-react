export const permissions = [
  { id: 0, level: 0, role: "funcionario", label: "Funcionário" },
  { id: 1, level: 1, role: "gerente", label: "Gerente" },
];

export const employeeList = [
  {
    id: "99999999999",
    name: "Boss Doe",
    email: "joao@doe",
    document: "99999999999",
    phoneList: [
      {
        id: "199999999999",
        phone: "199999999999",
      },
    ],
    superior: "Boss da Silva",
    permission: "gerente",
  },
  {
    id: "12345678912",
    name: "João Doe",
    email: "joao@doe",
    document: "12345678912",
    phoneList: [
      {
        id: "199999999999",
        phone: "199999999999",
      },
    ],
    superior: "Fulano da Silva",
    permission: "funcionario",
  },
  {
    id: "11111111111",
    name: "Maria Doe",
    fullName: "João Doe",
    email: "joao@doe",
    document: "11111111111",
    phoneList: [
      {
        id: "199999999999",
        phone: "199999999999",
      },
    ],
    superior: "Fulano da Silva",
    permission: "funcionario",
  },
  {
    id: "22222222222",
    name: "James Doe",
    email: "joao@doe",
    document: "22222222222",
    phoneList: [
      {
        id: "199999999999",
        phone: "199999999999",
      },
    ],
    superior: "Fulano da Silva",
    permission: "funcionario",
  },
];
