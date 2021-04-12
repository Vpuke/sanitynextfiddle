import PropTypes from 'prop-types'
import StyledHeading from './style'

const sizes = [1, 2, 3, 4, 5, 6]
const types = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

const Heading = (props) => {
  const { size, type, children } = props
  const headingSize = size ? size : 2
  const headingType = type ? type : 'h2'

  const Component = StyledHeading[headingType]

  return <Component size={headingSize}>{children}</Component>
}

Heading.propTypes = {
  size: PropTypes.oneOf(sizes),
  type: PropTypes.oneOf(types),
  children: PropTypes.any,
}

export default Heading
