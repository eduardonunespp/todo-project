import { api } from "../../core";
import { IAuth } from "./types/auth";

export const AuthService = async (email: string | undefined, password: string | undefined): Promise<IAuth | Error> => {
    try {
        const { data } = await api.post('Auth/login', {
            email, password,
        });

        if (data) {
            return data
        }

        return new Error('Erro no Login!')

    } catch (error: any) {
        return new Error(
            error.response?.data.erros ||
            (error as { message: string }).message ||
            'Erro no Login',
        )
    }
}