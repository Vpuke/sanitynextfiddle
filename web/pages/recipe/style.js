import styled from 'styled-components'

const StyledRecipe = styled.div`
  display: flex;
  flex-direction: column;
`

StyledRecipe.ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`

StyledRecipe.Recipe = styled.div`
  width: 60%;
`

export default StyledRecipe
