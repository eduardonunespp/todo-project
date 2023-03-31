import React from "react";
import * as S from "./authentication-input.style";
import { AuthInputType } from "../types";
import { forwardRef } from "react";

export const InputAuth = forwardRef<HTMLInputElement, AuthInputType>(
  ({ label, id, placeholder, ...rest }, ref) => {
    return (
      <S.InputAuth>
        <label htmlFor={id}>{label}</label>
        <input {...rest} ref={ref} placeholder={placeholder} />
      </S.InputAuth>
    );
  }
);

export default InputAuth;
