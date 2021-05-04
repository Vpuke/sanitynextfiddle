import { createGlobalStyle } from 'styled-components'
export const ResetStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}

::-webkit-scrollbar {
    display: none;
}


html,body{
  height: 100%;
}

html{
  font-size: 62.5%;
  overflow-x: hidden;
}

body,
div,
dl,
dt,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
fieldset,
input,
textarea,
p,
blockquote,
th,
td {
  padding: 0;
  margin: 0;
  font-size: 100%;
}

fieldset,
img {
  border: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

caption,
th {
  text-align: left;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  font-size: 100%;
  font-family: 'Bebas Neue', cursive;
}
h1{
  font-size: 40px;
}
h2{
  font-size: 36px;
}
h3{
  font-size: 32px;
}
h4{
  font-size: 28;
}
h5{
  font-size: 20;
}
h6{
  font-size: 16px;
}
p{
  font-size: 16px;
  font-family: Roboto;
  margin-bottom: 10px;
}
li{
  font-size: 16px;
  font-family: Roboto;
  margin-bottom: 10px;
}


q:before,
q:after {
  content: '';
}

abbr,
acronym {
  border: 0;
}

a{
  text-decoration: none;
  color: inherit;
}
`
