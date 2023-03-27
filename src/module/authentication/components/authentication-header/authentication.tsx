import React from 'react'
import * as S from './authentication.style'
import todoLogo from '../../../../assets/todo.logo'


export const AuthenticationHeader: React.FC = () => {

  return(

    //@ts-ignore
    <S.Container>
      {/* @ts-ignore */}
      <img src={todoLogo} alt="" />

      <a href="">Criar conta</a>
    </S.Container>

  )
}

export default AuthenticationHeader