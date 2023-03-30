import styled from "styled-components";

export const medias = {
  mobile: "(max-width: 37.5rem)",
};

export const Container = styled.header`
  width: 100%;
  height: 4.875rem;
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2rem;
  position: absolute;
  top: 0rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.brand};
    font-size: 0.8rem;
    font-weight: 600;

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media ${medias.mobile} {
    padding: 0.75rem;

    img {
      width: 5.625rem;
    }
  }
`;
