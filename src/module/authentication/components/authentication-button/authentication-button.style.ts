import styled from 'styled-components'

export const medias = {
  mobile: "(max-width: 600px)",
};

export const ButtonAuth = styled.button`

        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 9px 132px;
        gap: 10px;
        height: 42px;
        background: rgba(39, 196, 152, 0.5);
        border: none;
        border-radius: 4px;
        font-family: var(--font-primary);
        margin-top: 24px;
        font-weight: bold;
        color: var(--text-secundary);
        text-decoration: none;
        cursor: pointer;
        filter: brightness(0.8);

        @media ${medias.mobile} {
            padding: 9px 50px;
        }

`;
