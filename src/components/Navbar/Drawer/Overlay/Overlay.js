import styled from 'styled-components'

const StyledOverlay = styled.div`
  position: fixed;
  top: 56;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: 1s all;
  z-index: 11;
  @media (min-width: 768px) {
      left: 56px;
    }
`

const Overlay = ({open, clicked}) => {
  return (
    <StyledOverlay open={open} onClick={clicked}>
      
    </StyledOverlay>
  )
}

export default Overlay
