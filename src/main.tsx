
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeContext, ColorModeScript } from '@chakra-ui/react'
import theme from './components/theme'
import App from './App'
import './index.css'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme= {theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
