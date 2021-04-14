import styled from 'styled-components'

const StyledHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 10px 35px;
  height: 80px;
  background-color: #f5f5f5;
  z-index: 9999;
`

StyledHeader.LogoContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  font-family: 'Bebas Neue', cursive;
`

StyledHeader.MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 100%;
  width: 50%;
`

export default StyledHeader
