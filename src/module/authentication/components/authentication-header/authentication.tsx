import React from 'react'
import * as S from './authentication.style'
import todoLogo from '../../../../assets/todo.logo'
import TodoLogoSvg from '../../../../assets/todo.logo'
import { Link } from 'react-router-dom'
import { HeaderAuthType } from '../types'




export const AuthenticationHeader: React.FC<HeaderAuthType> = ({count, route}) => {

  return(

    //@ts-ignore
    <S.Container>
      <TodoLogoSvg/>
      <Link to={route}>
        {count}
      </Link>
    </S.Container>

  )
}

export default AuthenticationHeader