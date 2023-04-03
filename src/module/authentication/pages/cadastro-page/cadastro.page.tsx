import * as S from "./cadastro-page.style";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticationHeader } from "../../components";
import { SignUpType } from "../../../../shared/domain-types/models";
import { AuthSignUpValidator } from "../../../../shared/domain-types/validators/authentication";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthCreateUser } from "../../../../shared/services";
import { RegisterForm } from "./components/authentication-register-form";

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const form = useForm<SignUpType>({
    mode: "onChange",
    resolver: yupResolver(AuthSignUpValidator),
  });

  const onSubmit: SubmitHandler<SignUpType> = (data) => {
    console.log(data)
    // AuthCreateUser(data).then((result) => {
    //   if (result instanceof Error) {
    //     window.alert(result);
    //   } else {
    //     window.alert("Usuário cadastrado com sucesso");
    //     navigate("/");
    //   }
    // });

    form.reset();
    return;
  };

  return (
    <S.Container>
      <AuthenticationHeader route="/" count="Já tem uma conta?" />

      <FormProvider {...form}>
        <RegisterForm onSubmit={onSubmit} />
      </FormProvider>
      
    </S.Container>
  );
};

export default SignUp;
