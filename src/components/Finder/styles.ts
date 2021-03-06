import styled from "styled-components";
import { prosFinderGroupLine } from ".";
import { theme } from "../../types";

interface propsFinderContainer {
  left: number;
  top: number;
}

export const FinderContainer = styled.div<propsFinderContainer>`
  position: absolute;
  left: ${props => props.left + "px"};
  top: ${props => props.top + "px"};
  height: 620px;
  width: 800px;

  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.5), inset 0px 0.5px 1px #FFFFFF;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.15)) drop-shadow(0px 25px 30px rgba(0, 0, 0, 0.35));
  border-radius: 10px;
  border-color: #FFFFFF;

  display: grid;
  grid-template-columns: 234px 566px;

  user-select: none;
`

export const FinderArea = styled.div`
  height: 100%;
  background: #FFFFFF;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 0px 10px 10px 0px;
`

export const FinderContent = styled.div`
  max-height: 560px;
  height: max-content;
  border-radius: 0px 0px 10px 0px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
`

export const FinderSide = styled.div`
  width: 234px;
  background: rgba(225, 225, 224, 0.95);
  backdrop-filter: blur(80px);
  border-radius: 10px 0px 0px 10px;
  display: flex;
  flex-direction: column;
`

export const FinderCloseBar = styled.div`
  top: 0px;
  left: 0px; 
  width: 100%;
  height: 15px;
  margin-top: 20px;
  margin-left: 20px;
  display: grid;
  grid-template-columns: 15px 15px 15px;
  gap: 8px;

  :hover > div > img {
      visibility: visible; 
  }
`

interface ButtonCloseProps {
  color: string;
}

export const FinderCircle = styled.div<ButtonCloseProps>`
  height: 12px;
  width: 12px;
  background: ${props =>
    props.color === "red" ? theme.color.red :
      props.color === "green" ? theme.color.green :
        props.color === "orange" ? theme.color.orange :
          props.color === "purple" ? theme.color.purple :
            props.color === "blue" ? theme.color.blue :
              theme.color.yellow} ;
  border: 0.5px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;  

  :hover > img {
      visibility: visible; 
  }
  
`

export const FinderGroupFolders = styled.div`
  width: max-content;
  min-height: 10px;
  height: max-content;
  display: flex;
  text-align: start;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 10px;
`

export const FinderLabelGroupFolders = styled.label`
  font-family: sfPro;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  display: flex;
  align-items: flex-end;
  font-feature-settings: 'zero' on;
  color: rgba(60, 60, 67, 0.4);
  margin-bottom: 2px;
`


export const FinderGroupLine = styled.div<prosFinderGroupLine>`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 8px;
  border-radius: 7px;
  width: 170px;
  padding: 0px 10px 0px 10px;
  background-color: ${props => props.selected ? "rgba(0, 0, 0, 0.1)" : "none"};
  cursor: pointer;

`

export const FinderLabelGroup = styled.label`
  font-family: sfPro;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.08px;
  color: #434343;
  margin-top: 6px;
  margin-bottom: 6px;
  cursor: pointer;
`

export const FinderIconLabelGroup = styled.img`
  height: 16px;
  width: 16px;
  cursor: pointer;
`
export const FinderIconButtonCircle = styled.img`
  height: 10px;
  width: 10px;
  visibility: hidden; 
`