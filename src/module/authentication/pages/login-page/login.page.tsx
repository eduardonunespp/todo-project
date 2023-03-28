import * as S from './login-page.styles'
import React from 'react'
import { AuthenticationHeader, InputAuth, ButtonAuth  } from '../../components'

const RegisterPage: React.FC = () => {
  return (
    <S.Container>
      <AuthenticationHeader />

      <S.FormContainer>

        <h2>Autenticação</h2>

        <InputAuth label='Email' type='text' id='' />
        <InputAuth label='Senha' type='password' id=''/>

        <ButtonAuth />   

      </S.FormContainer>

    </S.Container>
  )
}

export default RegisterPage