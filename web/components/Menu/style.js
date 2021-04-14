import styled from 'styled-components'
import StyledHeading from '../Heading/style'

const StyledMenu = styled.div`
  @media (max-width: 801px) {
    display: none;
  }

  ${StyledHeading.h2} {
    transition: color 0.4s ease;
    :hover {
      color: lightgray;
    }
  }
`

StyledMenu.List = styled.ul`
  display: flex;
`

StyledMenu.ListItem = styled.li`
  margin-right: 10px;
`

export default StyledMenu
