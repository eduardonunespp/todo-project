import * as S from "./login-page.styles";
import React from "react";
import { AuthenticationHeader, InputAuth, ButtonAuth } from "../../components";

const SignIn: React.FC = () => {
  return (
    <S.Container>
      <AuthenticationHeader route="/cadastro" count="Não possui uma conta?" />

      <S.FormContainer>

        <h2>Autenticação</h2>

        <InputAuth label="Email" type="text" id="" placeholder="Email" />
        <InputAuth label="Senha" type="password" id="" placeholder="Senha" />

        <ButtonAuth>Salvar</ButtonAuth>
      </S.FormContainer>
    </S.Container>
  );
};

export default SignIn;
