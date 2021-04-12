import styled, { css } from 'styled-components'

const sizes = {
  1: 'font-size: 60px',
  2: 'font-size: 40px',
  3: 'font-size: 36px',
  4: 'font-size: 32px',
  5: 'font-size: 28px',
  6: 'font-size: 20px',
  7: 'font-size: 16px',
}

const defaultHeadingStyle = css`
  font-weight: bold;
  color: black;
  font-family: 'Bebas Neue', cursive;
`

const StyledHeading = styled.div``

StyledHeading.h1 = styled.h1`
  ${defaultHeadingStyle}
  ${(props) => (props.size ? sizes[props.size] : sizes[2])}
`
StyledHeading.h2 = styled.h2`
  ${defaultHeadingStyle}
  ${(props) => (props.size ? sizes[props.size] : sizes[3])}
`
StyledHeading.h3 = styled.h3`
  ${defaultHeadingStyle}
  ${(props) => (props.size ? sizes[props.size] : sizes[4])}
`
StyledHeading.h4 = styled.h4`
  ${defaultHeadingStyle}
  ${(props) => (props.size ? sizes[props.size] : sizes[5])}
`
StyledHeading.h5 = styled.h5`
  ${defaultHeadingStyle}
  ${(props) => (props.size ? sizes[props.size] : sizes[6])}
`
StyledHeading.h6 = styled.h6`
  ${defaultHeadingStyle}
  ${(props) => (props.size ? sizes[props.size] : sizes[7])}
`

export default StyledHeading
