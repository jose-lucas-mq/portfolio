import React from 'react'
import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'

export const Styles = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
  html, body {
    scroll-behavior: smooth;
    background-color: #171717;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    padding: 0px 30px;
  }
  button, textarea, input {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    border: none;
    background: none;
  }
  a {
    text-decoration: none;
    color: #FFFFFF;
  }
  img {
    display: block;
    max-width: 100%;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #171717; 
    border-radius: 5px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #2F2F2F;
    border-radius: 10px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #000;
    ; 
  }

  ::selection {
    background: #8B04BA;
    color: #fff;
}
`
const GlobalStyle = () => (
  <Styles />
)
export { GlobalStyle }