import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#E66767',
  pessego: '#FFF8F2',
  pessego_escuro: '#FFEBD9',
  branco: '#fff'
}

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }
  body{
    background-color: ${cores.pessego};
  }
`

export default EstiloGlobal
