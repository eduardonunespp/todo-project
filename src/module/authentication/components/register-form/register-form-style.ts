import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const FormContainer = styled.div`
  max-width: 19.75rem;

  h2 {
    font-family: var(--font-primary);
    font-size: 1.375rem;
    color: ${(props) => props.theme.colors.textSecondary};

    border-left: .4375rem solid ${(props) => props.theme.colors.brand};
    padding: 0rem .75rem;

    margin-bottom: 1.5rem;
  }
`;