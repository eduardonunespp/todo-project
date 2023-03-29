import React from 'react'
import { GlobalStyle } from './shared/styles'
import { RegisterPage } from './module'
import { ThemeProvider } from 'styled-components'
import { theme } from './shared/styles'

const App: React.FC =() => {

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RegisterPage />  
    </ThemeProvider>
  
    </>

  )
}

export default App
