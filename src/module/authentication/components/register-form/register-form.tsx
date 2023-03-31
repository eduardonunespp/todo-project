import React from "react";
import * as S from "./register-form-style";
import { InputAuth } from "../authentication-input/authentication-input";
import { ButtonAuth } from "../authentication-button/authentication-button.style";

const RegisterForm: React.FC = () => {
  return (
    <S.FormContainer>
      <h2>Nova Conta</h2>

      <InputAuth label="Nome" type="text" id="" placeholder="Nome" />
      <InputAuth label="Email" type="text" id="" placeholder="Email" />
      <InputAuth label="Senha" type="password" id="" placeholder="Senha" />
      <InputAuth
        label="Confirmação de Senha"
        type="password"
        id=""
        placeholder="Confirmação de Senha"
      />

      <ButtonAuth>Salvar</ButtonAuth>
    </S.FormContainer>
  );
};

export default RegisterForm;
