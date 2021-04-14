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
      <ul>
        <li>
          <Heading type={'h2'} size={1}>
            <Link href='/'>/ Home</Link>
          </Heading>
        </li>
        <li>
          <Heading type={'h2'} size={1}>
            <Link href='/recipes'>/ Recipes</Link>
          </Heading>
        </li>
        <li>
          <Heading type={'h2'} size={1}>
            <Link href='/about'>/ About</Link>
          </Heading>
        </li>
      </ul>
    </StyledMobileMenu>
  )
}

MobileMenu.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
}

export default MobileMenu
