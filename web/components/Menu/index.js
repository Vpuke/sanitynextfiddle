import Link from 'next/link'
import StyledMenu from './style'
import Heading from '../Heading'

const Menu = () => {
  return (
    <StyledMenu>
      <StyledMenu.List>
        <StyledMenu.ListItem>
          <Heading type={'h2'} size={5}>
            <Link href={'/'}>Home</Link>
          </Heading>
        </StyledMenu.ListItem>
        <StyledMenu.ListItem>
          <Heading type={'h2'} size={5}>
            <Link href={'/about'}>About</Link>
          </Heading>
        </StyledMenu.ListItem>
      </StyledMenu.List>
    </StyledMenu>
  )
}

export default Menu
