import React, { ForwardedRef } from "react";
import * as S from "./authentication-button.style";
import { ButtonInputType } from "../types";
import { forwardRef } from "react";

export const ButtonAuth = forwardRef<HTMLButtonElement, ButtonInputType>(
  ({ children, isDisabled, ...rest }, ref) => {
    return <S.ButtonAuth {...rest} ref={ref} children={children} isDisabled={isDisabled} />;
  }
);
export default ButtonAuth;
