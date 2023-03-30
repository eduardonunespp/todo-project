import * as S from "./cadastro-page.style";
import React from "react";
import { AuthenticationHeader, InputAuth, ButtonAuth } from "../../components";

const SignUp: React.FC = () => {
  return (
    <S.Container>
      <AuthenticationHeader route="/" count="Já tem uma conta?" />

      <S.FormContainer>
        <h2>Nova Conta</h2>

        <InputAuth label="Nome" type="text" id="" placeholder="Nome" />
        <InputAuth label="Email" type="text" id="" placeholder="Email" />
        <InputAuth label="Senha" type="password" id="" placeholder="Senha" />
        <InputAuth
          label="Confirmação de Senha"
          type="password"
          id=""
          placeholder="Confirmação se Senha"
        />

        <ButtonAuth>Salvar</ButtonAuth>
      </S.FormContainer>
    </S.Container>
  );
};

export default SignUp;
