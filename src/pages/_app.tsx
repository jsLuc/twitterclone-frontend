import { Reset } from 'styled-reset'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, #__next {
    height: 100vh;

    margin: 0;
    padding: 0;
    
    color: #d9d9d9;
    fill: #d9d9d9;
    background: #000000;
    
    font-family: 'Roboto', sans-serif;
  }
  
  input {
    background-color: #15181c;
    border: 0;
    color: #d9d9d9;
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
