import styled from 'styled-components'
import StyledHeading from '../../components/Heading/style'

const StyledHeroSection = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  top: 0;
  right: 0;
`

StyledHeroSection.Content = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
`

StyledHeroSection.Inner = styled.div`
  position: absolute;
  height: 200px;
  max-width: 600px;
  left: 15%;
  top: 30%;
  ${StyledHeading.h1} {
    color: white;
    font-size: 7rem;
    line-height: 1.5;
    @media only screen and (max-width: 760px) {
      font-size: 5rem;
    }
    @media only screen and (max-width: 450px) {
      font-size: 3rem;
    }
  }
`

export default StyledHeroSection
