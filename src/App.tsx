import React from 'react'
import { GlobalStyle } from './shared/styles'
import { ThemeProvider } from 'styled-components'
import { theme } from './shared/styles'
import { RouterApp } from './routes/routes'

const App: React.FC =() => {

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterApp />  
    </ThemeProvider>
  
    </>

  )
}

export default App
