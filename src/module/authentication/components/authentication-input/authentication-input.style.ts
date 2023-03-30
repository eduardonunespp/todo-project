import styled from "styled-components";

export const medias = {
  mobile: "(max-width: 600px)",
};

export const InputAuth = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.75rem;

  label {
    color: ${(props) => props.theme.colors.textSecondary};
    font-size: 1rem;
    display: block;

    ::after {
      content: '*';
      color: red;
      margin: 2px;
    }
  }

  input {
    width: 100%;
    height: 45px;
    border-radius: 3px;
    margin-top: 0.188rem;
    padding: 0px 10px;
    border: 1px solid #6c757d;
    background-color: ${(props) => props.theme.colors.primary};
    color: var(--text-secundary);
    border-radius: 0.25rem;

    &:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }

    &::placeholder {
      font-size: 0.9rem;
    }

    @media ${medias.mobile} {
      height: 40px;
    }
  }
`;
