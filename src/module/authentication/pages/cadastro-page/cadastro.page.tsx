import * as S from "./cadastro-page.style";
import React from "react";
import { AuthenticationHeader, InputAuth, ButtonAuth, RegisterForm } from "../../components";

const SignUp: React.FC = () => {
  return (
    <S.Container>
      <AuthenticationHeader route="/" count="Já tem uma conta?" />

      <RegisterForm />
    </S.Container>
  );
};

export default SignUp;
