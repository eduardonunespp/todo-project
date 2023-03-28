import styled from "styled-components";

export const medias = {
  mobile: "(max-width: 600px)",
};

export const Container = styled.header`
  width: 100%;
  height: 78px;
  background-color: var(--secundary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 32px;
  position: absolute;
  top: 0px;

  a {
    text-decoration: none;
    color: var(--brand);
    font-size: 0.8rem;

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media ${medias.mobile} {
    padding: 12px;

    img {
      width: 90px;
    }
  }
`;