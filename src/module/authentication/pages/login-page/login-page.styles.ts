import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-color: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const FormContainer = styled.div`
  width: 19.75rem;
  height: 15.9375rem;

  h2 {
    font-family: var(--font-primary);
    font-size: 1.3rem;
    color: var(--text-secundary);

    border-left: 7px solid var(--brand);
    padding: 0rem .75rem;

    margin-bottom: 1.5rem;
  }
`;
