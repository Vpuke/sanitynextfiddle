import styled from 'styled-components'
import StyledHeading from '../Heading/style'

const StyledMobileMenu = styled.nav`
  @media (min-width: 801px) {
    display: none;
  }
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  z-index: 10;
  transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.7s ease-in;
  overflow-y: hidden;

  ${StyledHeading.h2} {
    transition: color 0.4s ease;
    :hover {
      color: lightgray;
    }
  }
`
StyledMobileMenu.List = styled.ul``

StyledMobileMenu.ListItem = styled.li`
  margin-right: 10px;
  list-style: none;
`

export default StyledMobileMenu
