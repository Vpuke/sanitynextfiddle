import PropTypes from 'prop-types'
import StyledGrid from './style'

const Grid = (props) => {
  const { cols, children } = props

  return <StyledGrid>{children}</StyledGrid>
}

Grid.propTypes = {
  cols: PropTypes.number,
  children: PropTypes.any,
}

export default Grid
