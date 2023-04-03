import React from "react";
import * as S from "./register-form-style";
import { useFormContext, SubmitHandler } from "react-hook-form";
import { SignUpType } from "../../../../../../shared/domain-types/models";
import { InputAuth } from "../../../../components";
import { ButtonAuth } from "../../../../components";
import { yupResolver } from "@hookform/resolvers/yup";

type Props = {
  onSubmit: SubmitHandler<SignUpType>;
};

export const RegisterForm: React.FC<Props> = ({ onSubmit }) => {
  const { register, formState, handleSubmit } = useFormContext<SignUpType>();

  console.log(formState.isValid);

  return (
    <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
      <h2>Nova Conta</h2>

      <InputAuth
        label="Nome"
        type="text"
        id=""
        placeholder="Nome"
        error={formState.errors.name?.message}
        {...register("name")}
      />
      <InputAuth
        label="Email"
        type="text"
        id=""
        placeholder="Email"
        error={formState.errors.email?.message}
        {...register("email")}
      />

      <InputAuth
        label="Senha"
        type="password"
        id=""
        placeholder="Senha"
        error={formState.errors.password?.message}
        {...register("password")}
      />
      <InputAuth
        label="Confirmação de Senha"
        type="password"
        id=""
        placeholder="Confirmação de Senha"
        error={formState.errors.passwordConfirm?.message}
        {...register("passwordConfirm")}
      />

      <ButtonAuth type="submit" isDisabled={formState.isValid}>
        Salvar
      </ButtonAuth>
    </S.FormContainer>
  );
};

export default RegisterForm;
