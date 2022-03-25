import {createGlobalStyle} from 'styled-components';

import JosefinSansBold from '../assets/fonts/JosefinSans-Bold.ttf';
import JosefinSansRegular from '../assets/fonts/JosefinSans-Regular.ttf';

export const mobileBreakpoint = "376px";

export default createGlobalStyle`
  // fonts
  @font-face {
    font-family: 'JosefinSans-Bold';
    src: url(${JosefinSansBold}) format('truetype');
  }

  @font-face {
    font-family: 'JosefinSans-Regular';
    src: url(${JosefinSansRegular}) format('truetype');
  }
  
  // variables
  :root{
    --bright-blue: hsl(220, 98%, 61%);
    --check-background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))
  }
  
  // properties
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    font-family: "JosefinSans-Regular", sans-serif;
    font-size: 18px;
  }
  body html #root {
    height: 100%;
  }
`