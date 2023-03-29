import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `

*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}


html {

  height: 100%;

  @media (max-width: 1000px) {
      font-size: 93.75%;
  }

  @media (max-width: 720px){
      font-size: 87.5%;
  }
}

body {
  -webkit-font-smoothing: antialisse;
  font-family: 'Poppins', sans-serif;
  height: 100%;
}



`