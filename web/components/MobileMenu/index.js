// import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import StyledMobileMenu from './style'
import Link from 'next/link'
import Heading from '../Heading'

const MobileMenu = (props) => {
  const { open, setOpen } = props
  return (
    <StyledMobileMenu
      open={open}
      className={'menu'}
      onClick={() => setOpen(!open)}
    >
      <StyledMobileMenu.List>
        <StyledMobileMenu.ListItem>
          <Heading type={'h2'} size={1}>
            <Link href='/'>/ Home</Link>
          </Heading>
        </StyledMobileMenu.ListItem>
        <StyledMobileMenu.ListItem>
          <Heading type={'h2'} size={1}>
            <Link href='/recipes'>/ Recipes</Link>
          </Heading>
        </StyledMobileMenu.ListItem>
        <StyledMobileMenu.ListItem>
          <Heading type={'h2'} size={1}>
            <Link href='/about'>/ About</Link>
          </Heading>
        </StyledMobileMenu.ListItem>
      </StyledMobileMenu.List>
    </StyledMobileMenu>
  )
}

MobileMenu.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
}

export default MobileMenu
