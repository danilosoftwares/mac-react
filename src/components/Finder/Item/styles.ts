import styled from "styled-components";

export const Container = styled.div`
  height: 94px;
  width: 118px;
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 5px;
  
  :hover {
    > div {
      background-color: #e3e1e3;
    }
    > label {
      background-color: #0063b2;
      border-radius: 5px;
      color: white;  
    }
  }
`

export const ContainerImage = styled.div`
  height: 70px;
  width: 80px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
`

export const Imaging = styled.img`

`

export const LabelFile = styled.label`
  font-family: sfPro;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 14px;
  color: #000000;
  padding: 1px 3px 1px 3px;
`
