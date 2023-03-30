import * as yup from "yup";

export const AuthSignUpValidator = yup.object({
  name: yup.string().required("O nome do usuário é obrigatório").max(100),
  email: yup.string().required("O email do usuário é obrigatório"),
  password: yup.string().required("A senha do usuário é obrigatória"),
  passwordConfirm: yup
    .string()
    .required("Confirmação de senha é obrigatório")
    .oneOf([yup.ref("password")], "As senhas devem corresponder"),
});

export const AuthSignInValidator = yup.object({
  email: yup.string().required("O email do usuário é obrigatório").max(255),
  password: yup.string().required("A senha do usuário é obrigatória"),
});
