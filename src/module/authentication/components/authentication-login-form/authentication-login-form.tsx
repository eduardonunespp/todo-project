import React from 'react'
import * as S from './authentication-login-form.style'
import { InputAuth } from '../authentication-input/authentication-input'
import { ButtonAuth } from '../authentication-button/authentication-button.style'

export const LoginForm: React.FC = () => {
    return (
        <S.FormContainer>

        <h2>Autenticação</h2>

        <InputAuth label="Email" type="text" id="" placeholder="Email" />
        <InputAuth label="Senha" type="password" id="" placeholder="Senha" />

        <ButtonAuth>Salvar</ButtonAuth>
      </S.FormContainer>
    )
}

export default LoginForm