import React from "react";
import {
  MenuBlur,
  MenuLeft,
  AppleImage,
  NavBarMac,
  NavUnordList,
  NavListItem,
  NavUnordListSub,
  NavLabel,
  NavListItemSub,
  NavLabelSub,
  NavListItemSubSeparete,
  NavUnordListSubLast,
  MenuRight,
  ImageChild,
  NavLabelSubShortCut,
  DivShortCut,
} from './styles';
// import arrow_child from './arrow_right.svg';
import { ReactComponent as Logo } from './arrow_right.svg';

interface objMenu {
  label?: string;
  image?: string;
  shortcut?: string;
  child?: objMenu[];
}

interface objSide {
  left: objMenu[];
  right: objMenu[];
}

interface MenuLeftItensProps {
  data: objSide;
}

export const MenuMac: React.FC<MenuLeftItensProps> = ({ data, ...attr }) => {

  const getChild = (child: objMenu[]) => {
    return child.map((value, index) => {
      return (value.label === "-" ?
        <NavListItemSubSeparete><div></div></NavListItemSubSeparete> :
        <NavListItemSub><NavLabelSub>{value.label} </NavLabelSub>
          {value.child ? <ImageChild><Logo fill="black" /></ImageChild> : value.shortcut ? <DivShortCut><NavLabelSubShortCut>{value.shortcut} </NavLabelSubShortCut></DivShortCut> : null}
          {value.child ? <NavUnordListSubLast> <div>  {getChild(value.child)} </div></NavUnordListSubLast> : null}
        </NavListItemSub>)
    });
  }

  return (
    <MenuBlur>
      <MenuLeft>
        <NavBarMac >
          <NavUnordList>
            {data.left.map((value, index) => {
              return (
                <NavListItem key={index}>
                  {value.label ? <NavLabel>{value.label}</NavLabel> : value.image ? <AppleImage src={value.image} alt="logo" /> : null}
                  {value.child ? <NavUnordListSub> <div>  {getChild(value.child)} </div></NavUnordListSub> : null}
                </NavListItem>)
            })}
          </NavUnordList>
        </NavBarMac>
      </MenuLeft>
      <MenuRight>
        <NavBarMac >
          <NavUnordList>
            {data.right.map((value, index) => {
              return (
                <NavListItem key={index}>
                  {value.label ? <NavLabel>{value.label}</NavLabel> : value.image ? <AppleImage src={value.image} alt="logo" /> : null}
                  {value.child ? <NavUnordListSub> <div>  {getChild(value.child)} </div></NavUnordListSub> : null}
                </NavListItem>)
            })}
          </NavUnordList>
        </NavBarMac>
      </MenuRight>
    </MenuBlur>
  );
};
