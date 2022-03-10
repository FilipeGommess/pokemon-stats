import { createGlobalStyle } from 'styled-components';
import { primaryColor } from '../config/colors';

export default createGlobalStyle`
  *{
    box-sizing:border-box ;
    margin:0;
    padding:0;
    outline:none;
    font-family:'Nunito';
  }

  body {
    background-color: ${primaryColor};
  }
`;
