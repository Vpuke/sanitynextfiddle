import styled from 'styled-components'

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 35px;
  padding-top: ${(props) => (props.paddingTop ? '20px' : '80px')};
`
export default StyledContainer
