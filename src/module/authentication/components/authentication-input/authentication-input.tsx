import React from "react";
import * as S from "./authentication-input.style";
import { AuthInputType } from "../types";
import { forwardRef } from "react";
import { jsx, css } from "@emotion/react";


export const InputAuth = forwardRef<HTMLInputElement, AuthInputType>(
  ({ label, id, placeholder, error, ...rest }, ref) => {

    const getErrorStyles = (error: string | undefined) => {
      return error !== undefined;
    }

    return (
      <S.InputAuth error={getErrorStyles(error)}>
        <label htmlFor={id}>{label}</label>
        <input {...rest} ref={ref} placeholder={placeholder} />
        {error !== undefined && <span>{error}</span>}
      </S.InputAuth>
    );
  }
);

export default InputAuth;
