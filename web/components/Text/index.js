import PropTypes from 'prop-types'
import StyledText from './style'

const Text = (props) => {
  const { children, size } = props
  return <StyledText size={size}>{children}</StyledText>
}

Text.propTypes = {
  children: PropTypes.any,
  size: PropTypes.number,
}

export default Text
