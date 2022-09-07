import React from "react";
import Input from "./Input";
import Radio from "./Radio";

let inputs = [
  {
    id: 1,
    name: "nome",
    type: "text",
    errorMsg: "Por favor, insira seu nome.",
    label: "Seu nome:",
    required: true,
  },
  {
    id: 2,
    name: "email",
    type: "email",
    label: "Email:",
    errorMsg: "Por favor, insira um e-mail válido.",
    placeholder: "contato@email.com",
    required: true,
  },
  {
    id: 3,
    name: "cpf",
    type: "text",
    label: "CPF:",
    errorMsg: "Por favor, insira um CPF válido.",
    placeholder: "000.000.000-00",
    required: true,
  },
];

const radios = [
  {
    id: "masculino",
    name: "genero",
    type: "radio",
    label: "Masculino",
    defaultChecked: "{true}",
  },
  {
    id: "feminino",
    name: "genero",
    type: "radio",
    label: "Feminino",
  },
];

export default function FormMain() {
  const [values, setValues] = React.useState({
    nome: "",
    email: "",
    cpf: "",
    genero: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <Input
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}
        />
      ))}
      <div className="radio">
        {radios.map((radio) => (
          <Radio key={radio.id} {...radio} value={values[radio.name]} />
        ))}
      </div>
      <button className="button">Enviar</button>
    </form>
  );
}

export function FormCompartilhe() {
  const [values, setValues] = React.useState({
    nome: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  inputs = [inputs[0], inputs[1]]

  return (
    <form className="form-compartilhe" onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <Input
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}
        />
      ))}
      <button className="button">Enviar agora</button>
    </form>
  );
}
