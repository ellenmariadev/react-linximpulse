import React from "react";
import Input from "./Input";
import Radio from "./Radio";

let inputs = [
  {
    id: 1,
    name: "nome",
    type: "text",
    errorMsg: "Por favor, insira o seu nome.",
    label: "Nome Completo:",
    pattern: "^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$",
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
    errorMsg: "Por favor, insira o CPF no formato válido.",
    placeholder: "000.000.000-00",
    pattern: "^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$",
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
      <div style={{ paddingTop: "0.5rem" }} className="radio">
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

  let newInput = inputs.map((item) => {
    if (item.id === 1) {
      return {
        ...item,
        label: "Nome do seu amigo:",
        errorMsg: "Por favor, insira o nome do seu amigo.",
      };
    }
    return item;
  });

  newInput = [newInput[0], newInput[1]];

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-compartilhe">
        {newInput.map((input) => (
          <Input
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
      </div>
      <button style={{ placeSelf: "center" }} className="button">
        Enviar agora
      </button>
    </form>
  );
}
