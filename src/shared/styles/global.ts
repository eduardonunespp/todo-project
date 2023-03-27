import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `

*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

:root {
  --background: #E9ECEF;
  --blue-light: #6933FF;
  --primary: #25294C;
  --secundary: #202342;
  --text-primary: #333333;
  --text-secundary: #E9ECEF;
  --text-input: #6C757D;
  --text-label: #343A40;
  --brand: #27C498;
  --positive: #0D6EFD;
  --sucess: #198754;
  --warning: #FFC107;
  --danger: #DC3545;
  --font-primary: 'Poppins', sans-serif;
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