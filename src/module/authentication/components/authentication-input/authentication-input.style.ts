import styled from 'styled-components'

export const medias = {
  mobile: '(max-width: 600px)'
}

export const InputAuth = styled.div `

  display: flex;
  flex-direction: column;
  margin-bottom: 0.75rem;

  label {
        color: var(--text-secundary);
        font-size: 0.8rem;
        display: block;
  }

  input {

    width: 100%;
    height: 45px;
    border-radius: 3px;
    margin-top: 0.188rem;
    padding: 0px 10px;
    border: 1px solid #6C757D;
    background-color: var(--primary);
    color: var(--text-secundary);

    &:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    @media ${medias.mobile} {
      height: 40px;       
    }

  }

 



`