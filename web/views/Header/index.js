import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Burger from '../../components/Burger'
import MobileMenu from '../../components/MobileMenu'
import Menu from '../../components/Menu'
import StyledHeader from './style'
import Link from 'next/link'
import Heading from '../../components/Heading'

const Header = (props) => {
  const { color } = props
  const [open, setOpen] = useState(false)

  return (
    <StyledHeader color={color}>
      <StyledHeader.LogoContainer>
        <Heading>
          <Link href='/'>Veggielicious</Link>
        </Heading>
      </StyledHeader.LogoContainer>
      <StyledHeader.MenuContainer>
        <Menu />
        <Burger open={open} setOpen={setOpen} />
      </StyledHeader.MenuContainer>
      <MobileMenu open={open} setOpen={setOpen} />
    </StyledHeader>
  )
}

Header.propTypes = {
  color: PropTypes.string,
}

export default Header
