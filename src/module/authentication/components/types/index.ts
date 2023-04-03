export type AuthInputType = {
  type: string;
  id: string;
  label: string;
  placeholder: string;
  error?: string;
};

export type ButtonInputType = {
  isDisabled: boolean;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type HeaderAuthType = {
  count: string;
  route: string;
};
