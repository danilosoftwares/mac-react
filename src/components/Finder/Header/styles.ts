import styled from "styled-components";

export const Container = styled.div`
  height: 49px;
  border: 0.5px solid #E6E6E6;
  border-radius: 0px 10px 0px 0px;
  border-left: none;
`

export const SubContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 12px;
  margin-right: 12px;
  justify-content: space-between;
`

export const PriorNextContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 76px;
`

export const LabelFolderContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  width: 176px;
`
export const FormatFilesContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 160px;
`

export const ShareTagFilesContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width:72px;
`

export const SearchFilesContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  width:36px;
  justify-content: end;
`

export const LabelFolder = styled.label`
  font-family: sfPro;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.08px;
  color: rgba(0, 0, 0, 0.85);
  margin-top: 6px;
  margin-bottom: 6px;
`