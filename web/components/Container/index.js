import PropTypes from 'prop-types'
import StyledContainer from './style'

const Container = (props) => {
  const { children, paddingTop } = props
  return <StyledContainer paddingTop={paddingTop}>{children}</StyledContainer>
}

Container.propTypes = {
  children: PropTypes.any,
  paddingTop: PropTypes.bool,
}

export default Container
