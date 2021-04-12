import PropTypes from 'prop-types'
import StyledMain from './style'

const Main = (props) => {
  const { children } = props

  return <StyledMain>{children}</StyledMain>
}

Main.propTypes = {
  children: PropTypes.any,
}

export default Main
