import styled from "styled-components";

export const Container = styled.div`
  background: #8F8F8F;
  mix-blend-mode: color-burn;
  opacity: 0.2;
  position: absolute;
  height: 24px;
  width: 100%;
  left: 0px;
  top: 0px;
`

export const MenuBlur = styled.div`
  z-index: 999999999;
  background: rgba(255, 255, 255, 0.2);
  /* backdrop-filter: blur(65px); */
  position: absolute;
  height: 24px;
  width: 100%;
  left: 0px;
  top: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const MenuLeft = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400px;
`
export const MenuRight = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: right;  
  & > label {
    padding-left: 15px;
    padding-right: 15px;
  }
`

export const DivShortCut = styled.div`
  display: grid;
  position: absolute;
  width: 60px;
  height: 9px;
  margin-top: -20px;
  left: 160px;
`

export const ImageChild = styled.div`
  position: absolute;
  width: 5px;
  height: 9px;
  margin-top: -22px;
  left: 214px;
`

export const AppleImage = styled.img`
  padding-left: 5px;
  padding-right: 5px;
  width: 24px;
  height: 24px;
`

export const LabelTitle = styled.label`
  font-family: sfPro;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  text-align: initial;
  letter-spacing: -0.35px;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`
export const SubMenu = styled.div`
  height: 500px;
  width: 200px;
  background-color: blue;
  position: absolute;
  left: 15px;
  top: 25px;
`

export const NavBarMac = styled.nav`
  position: absolute;
  /* width: 500px; */
  width: max-content;
`

export const NavUnordList = styled.ul`
  list-style: none;
  float: left;
  padding-inline-start: 0px;
`
export const NavListItem = styled.li`
  position: relative;
  float: left;

  :hover > ul {
    display: block;
  }
  /* :over > ul {
    display: block;
  } */
  :hover > a {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(67.3803px);
    border-radius: 4px;
  }
  :hover > img {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(67.3803px);
    border-radius: 4px;
  }
`
export const NavUnordListSub = styled.ul`
  position: absolute;
  top: 25px;
  left: 0px;
  padding-left: 0px;
  display: none;
  background-color: transparent;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(50px);
  border-radius: 10px;

  & > div {
    background: rgba(255, 255, 255, 0.6);
    border: 0.5px solid rgba(0, 0, 0, 0.12);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`

export const NavLabel = styled.a`
  text-decoration: none;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
  padding-bottom: 3px;
  display: block;
  font-family: sfPro;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  text-align: initial;
  -webkit-letter-spacing: -0.35px;
  -moz-letter-spacing: -0.35px;
  -ms-letter-spacing: -0.35px;
  letter-spacing: -0.35px;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  /* :hover {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(67.3803px);
    border-radius: 4px;
  } */
`

export const NavListItemSub = styled.li`
  display: block;
  width: 233px;
  height: 25px;

  :hover > ul {
    display: block;
    margin-top: -31px;
  }
  /* :over > ul {
    display: block;
    margin-top: -33px;
  } */
  :hover > a {
    background: #007AFF;
    backdrop-filter: blur(67.3803px);
    border-radius: 4px;
    color: white;
  }
  :hover > div > a {
    background: #007AFF;
    backdrop-filter: blur(67.3803px);
    border-radius: 4px;
    color: white;
  }
  :hover > div > svg {
    fill: white;
  } 
`

export const NavListItemSubSeparete = styled.li`
  display: block;
  width: 233px;
  height: 3px;
  margin-top: 1px;
  margin-bottom: 3px;
  & > div {
    height: 1px;
    background: rgba(60, 60, 67, 0.18);
    margin-left: 10px;
    margin-right: 14px;
  }
`

export const NavLabelSub = styled.a`
  text-decoration: none;
  padding-left: 10px;
  padding-right: 14px;
  height: 10px;
  display: block;
  font-family: sfPro;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.25px;
  font-feature-settings: 'zero' on;
  text-align: initial;
  -webkit-letter-spacing: -0.35px;
  -moz-letter-spacing: -0.35px;
  -ms-letter-spacing: -0.35px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  color: #3D3D3D;
  padding-top: 3px;
  padding-bottom: 10px;
  padding-left: 10px;
  margin-left: 5px;
  margin-right: 5px;
  opacity: 0.9;
  /* :hover {
    background: #007AFF;
    backdrop-filter: blur(67.3803px);
    border-radius: 4px;
    color: white;
  } */
`

export const NavLabelSubShortCut = styled.a`
  /* position: absolute;
  margin-top: -19px;
  left: 154px; */

  font-family: sfPro;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  text-align: right;
  letter-spacing: -0.25px;
  font-feature-settings: 'zero' on;
  color: rgba(60, 60, 67, 0.6);
  //mix-blend-mode: color-burn;
  opacity: 0.76;
`

export const NavUnordListSubLast = styled.ul`
  position: absolute;  
  left: 233px;
  padding-left: 0px;
  display: none;
  background-color: transparent;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(50px);
  border-radius: 10px;

  & > div {
    background: rgba(255, 255, 255, 0.6);
    border: 0.5px solid rgba(0, 0, 0, 0.12);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(60px);
    border-radius: 6px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`