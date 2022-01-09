import styled from "styled-components";

export const DockContainer = styled.div`
  position: absolute;
  left: 25%;
  height: 64px;
  width: max-content;
  bottom: 0px;

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
  :hover {
    height: 90px;
    margin-bottom: 30px;
  }
`