import React from 'react'
import * as S from './authentication.style'
import todoLogo from '../../../../assets/todo.logo'
import TodoLogoSvg from '../../../../assets/todo.logo'
import { Link } from 'react-router-dom'


export const AuthenticationHeader: React.FC = () => {

  return(

    //@ts-ignore
    <S.Container>
      <TodoLogoSvg/>
      <a href="">Não tem uma conta?</a>
    </S.Container>

  )
}

export default AuthenticationHeader