import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  body {
    --color10: #fff;
    --color19: #222;
    --color20: #232532;
    --color30: #FF2477;
    --color31: #F61067;
  }
  body {
    --background: var(--color20);
    --textColor: var(--color10);
    --textColorHover: var(--color31);
    --textColorActive: var(--color31);
    --buttonBackground: var(--color31);
    --buttonBackgroundHover: var(--color30);
    --buttonBackgroundActive: var(--color30);
    --buttonTextColor: var(--color10);
    --buttonTextColorHover: var(--color10);
    --buttonTextColorActive: var(--color10);
  }
  body.pink {
    --background: var(--color31);
    --textColor: var(--color10);
    --textColorHover: var(--color20);
    --textColorActive: var(--color20);
    --buttonBackground: var(--color30);
    --buttonBackgroundHover: var(--color20);
    --buttonBackgroundActive: var(--color30);
    --buttonTextColor: var(--color10);
    --buttonTextColorHover: var(--color10);
    --buttonTextColorActive: var(--color10);
  }
  body {
    padding-top: 240px;
    font-family: 'Montserrat', sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-size-adjust: none;
    line-height: 1;
    font-size: 100%;
    color: var(--text);
    background-color: var(--background);
    margin: 0px;
  }
  a,
  button,
  input[type="button"] {
    transition: all .4s ease;
  }
  a {
    color: var(--textColor);
    text-decoration: none;
    &:hover {
      color: var(--textColorHover);
    }
  }
`

export default GlobalStyles
