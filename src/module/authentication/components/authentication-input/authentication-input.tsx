import React from "react";
import * as S from "./authentication-input.style";
import { AuthInputType } from "../types";
import { forwardRef } from "react";

const AuthenticationInput = forwardRef<HTMLInputElement, AuthInputType>(
  ({ label, id, ...rest }, ref) => {
    return (
      <S.InputAuth>
        <label htmlFor={id}>{label}</label>
        <input {...rest} ref={ref} />
      </S.InputAuth>
    );
  }
);

export default AuthenticationInput;
