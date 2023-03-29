export type AuthInputType = {
  type: string,
  id: string,
  label: string,
  placeholder: string
}

export type ButtonInputType = {
  
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>