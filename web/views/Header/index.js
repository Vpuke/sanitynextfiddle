import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Burger from '../../components/Burger'
import MobileMenu from '../../components/MobileMenu'
import Menu from '../../components/Menu'
import StyledHeader from './style'
import Link from 'next/link'

const Header = (props) => {
  const { color } = props
  const [open, setOpen] = useState(false)

  return (
    <StyledHeader color={color}>
      <StyledHeader.LogoContainer>
        <Link href='/'>
          <span style={{ fontSize: '30px' }}>Veggie</span>
        </Link>
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
