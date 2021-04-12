import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Burger from '../../components/Burger'
import Menu from '../../components/Menu'
import StyledHeader from './style'

const Header = (props) => {
  const { color } = props
  const [open, setOpen] = useState(false)

  // useEffect(() => {
  //   const body = document.querySelector('body')
  //   body.style.overflow = open ? 'hidden' : 'auto'
  // }, [open])

  return (
    <StyledHeader color={color}>
      <StyledHeader.LogoContainer>
        <span style={{ fontSize: '30px' }}>Veggie</span>
      </StyledHeader.LogoContainer>
      <StyledHeader.MenuContainer>
        <Burger open={open} setOpen={setOpen} />
      </StyledHeader.MenuContainer>
      <Menu open={open} setOpen={setOpen} />
    </StyledHeader>
  )
}

Header.propTypes = {
  color: PropTypes.string,
}

export default Header
