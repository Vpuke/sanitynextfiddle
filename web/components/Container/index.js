import PropTypes from 'prop-types'
import StyledContainer from './style'

const Container = (props) => {
  const { children } = props
  return <StyledContainer>{children}</StyledContainer>
}

Container.propTypes = {
  children: PropTypes.any,
}

export default Container
