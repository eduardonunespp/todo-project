import * as S from './login-page.styles'
import React from 'react'
import { AuthenticationHeader } from '../../components'

const RegisterPage: React.FC = () => {
  return (
    <S.Container>
      <AuthenticationHeader></AuthenticationHeader>
    </S.Container>
  )
}

export default RegisterPage