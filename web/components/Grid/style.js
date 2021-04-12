import styled from 'styled-components'

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 400px;
  grid-gap: 20px;
`

export default StyledGrid
