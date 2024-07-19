import styled, { keyframes } from "styled-components";

const toHeight = keyframes`
  from   { height: 63px }
  to { height: 90px }
`

export const DockContainer = styled.div`
  position: absolute;
  left: 25%;
  height: 64px;
  width: max-content;
  bottom: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(244, 245, 245, 0.75);
  border: 0.5px solid #F4F5F5;
  box-sizing: border-box;
  backdrop-filter: blur(96px);
  border-radius: 16px;
`
export const ImageItemDock = styled.img`
  height: 63px;
 
  :hover {
    height: 90px;
    margin-bottom: 30px;
    animation: ${toHeight} 0.2s linear;
    transition: height 0.2s linear;    
  }
`