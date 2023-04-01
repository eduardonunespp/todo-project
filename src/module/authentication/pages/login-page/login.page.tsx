import * as S from "./login-page.styles";
import React from "react";
import { AuthenticationHeader } from "../../components";
import { LoginForm } from "../../components";

const SignIn: React.FC = () => {
  return (
    <S.Container>
      <AuthenticationHeader route="/cadastro" count="Não possui uma conta?" />

      <LoginForm />
    </S.Container>
  );
};

export default SignIn;
