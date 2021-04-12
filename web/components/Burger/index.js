import StyledBurger from './style'
import PropTypes from 'prop-types'

const Burger = (props) => {
  const { open, setOpen } = props
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
}

export default Burger
