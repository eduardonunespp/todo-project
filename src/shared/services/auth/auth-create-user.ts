import { api } from '../../core'
import { IRegister } from '../types/register'

export const AuthCreateUser = async (data: IRegister): Promise<void | Error>  => {
    try {
        await api.post<IRegister>('/Auth/Register', data)
    }
    catch(error: any){
        return new Error(
            error.response?.data.erros || 
                (error as { message: string }).message || 
                    'Error no cadastro do usuário'
        )
    }

}

export default AuthCreateUser

