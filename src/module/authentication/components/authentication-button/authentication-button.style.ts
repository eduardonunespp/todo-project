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
        padding: .5625rem 8.25rem;
        gap: .625rem;
        height: 2.625rem;
        background: rgba(39, 196, 152, 0.5);
        border: none;
        border-radius: .25rem;
        font-family: ${(props) => props.theme.font.family};
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: bold;
        color: ${(props) => props.theme.colors.textSecondary};
        text-decoration: none;
        cursor: pointer;
        filter: brightness(0.8);

        @media ${medias.mobile} {
            padding: .5625rem 3.125rem;
        }

`;
