import { createGlobalStyle } from 'styled-components';
import { primaryColor, fourthColor } from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

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
   body .Toastify .Toastify__toast-container .Toastify__toast--error {
    --toastify-icon-color-error: #dddddd;
    background-color: ${fourthColor};
    color:${primaryColor};
    .Toastify__progress-bar {
      background-color: ${primaryColor};
    }
    .Toastify__close-button {
      color: ${primaryColor};
    }
   }
`;
