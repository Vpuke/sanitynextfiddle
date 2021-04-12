import styled from 'styled-components'

const StyledText = styled.p`
  font-size: ${(props) => (props.size ? `${props.size}px` : `16px`)};
`

export default StyledText
