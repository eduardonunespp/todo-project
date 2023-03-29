import React, { ForwardedRef } from "react";
import * as S from "./authentication-button.style";
import { ButtonInputType } from "../types";
import { forwardRef } from "react";

export const ButtonAuth = forwardRef<HTMLButtonElement, ButtonInputType>(
  ({ children, ...rest }, ref) => {
    return <S.ButtonAuth {...rest} ref={ref} children={children} />;
  }
);
export default ButtonAuth;
