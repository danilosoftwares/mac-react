import React, { useState } from "react";
import {
  FinderSide,
  FinderContainer,
  FinderCloseBar,
  FinderArea,
  FinderCircle,
  FinderLabelGroupFolders,
  FinderGroupFolders,
  FinderLabelGroup,
  FinderIconLabelGroup,
  FinderGroupLine,
  FinderContent,
  FinderIconButtonCircle,
} from './styles';
import folder_label from './icon_finder_label.svg';
import button_red from './button_red.svg';
import button_yellow from './button_yellow.svg';
import button_green from './button_green.svg';
import { Header } from "./Header";
import { Item } from "./Item";
import { loadList } from '../../data/folders.js';

interface propsFinderContentItem {
  label: string;
  icon: string;
}
interface propsItemGroup {
  label?: string;
  selected?: boolean;
  color?: string;
  items?: Array<propsFinderContentItem>
}

interface propsGroup {
  label?: string;
  items?: Array<propsItemGroup>
}
export interface prosFinderGroupLine {
  label?: string;
  selected?: boolean;
  color?: string;
  items?: Array<propsFinderContentItem>
}


export const Finder: React.FC = () => {

  const [listFiles, setListFiles] = useState<propsGroup[]>(loadList());

  const getNumber = () => {
    const x = Math.floor(Math.random() * 9999) + 1;
    return x;
  }

  const createGroup = (index: number, title?: string, list?: Array<prosFinderGroupLine>) => {
    return <FinderGroupFolders key={index}><FinderLabelGroupFolders key={index} >{title}</FinderLabelGroupFolders> {createGroupList(title, list)}</FinderGroupFolders>
  }

  const createGroupList = (title?: string, list?: Array<prosFinderGroupLine>) => {
    return list?.map((item, index) => {
      return (
        <FinderGroupLine key={index} selected={item.selected} onClick={(e) => clickGroup(title, item.label)}>
          {item.color ? <FinderCircle key={index} color={item.color}></FinderCircle> : <FinderIconLabelGroup src={folder_label} alt="icon"></FinderIconLabelGroup>}
          <FinderLabelGroup key={getNumber()} >{item.label}</FinderLabelGroup>
        </FinderGroupLine>
      )
    });
  }

  const clickGroup = (group?: string, label?: string) => {
    let newList = listFiles.map((item, index) => {
      return {
        label: item.label, items: item.items?.map((subitem, index) => {
          return { label: subitem.label, color: subitem.color, items: subitem.items, selected: (subitem.label === label && item.label === group) }
        })
      };
    });
    setListFiles(newList);
  }

  const readDataGroup = () => {
    return listFiles.map((item, index) => {
      const nameGroup = item.label;
      const itemsGroup = item.items;
      return createGroup(index, nameGroup, itemsGroup);
    });
  }

  const readDataFilesOfGroup = () => {
    return listFiles.map((item, index) => {
      const itemsGroup = item.items;
      return itemsGroup?.map((itemGroup, index) => {
        return itemGroup.selected ? <React.Fragment key={index}><Header key={index} label={itemGroup.label}></Header>{readDataFilesContentOfGroup(itemGroup.items)}</React.Fragment> : null;
      });
    });
  }

  const readDataFilesContentOfGroup = (list?: Array<propsFinderContentItem>) => {
    return <FinderContent key={getNumber()} > {list?.map((item, index) => {
      return <Item key={getNumber()} label={item.label} icon={item.icon}></Item>
    })} </FinderContent>;
  }

  return (
    <FinderContainer>
      <FinderSide>
        <FinderCloseBar>
          <FinderCircle color={"red"}><FinderIconButtonCircle src={button_red} alt="nenhum"></FinderIconButtonCircle> </FinderCircle>
          <FinderCircle color={"yellow"}><FinderIconButtonCircle src={button_yellow} alt="nenhum"></FinderIconButtonCircle> </FinderCircle>
          <FinderCircle color={"green"}><FinderIconButtonCircle src={button_green} alt="nenhum"></FinderIconButtonCircle> </FinderCircle>
        </FinderCloseBar>
        {readDataGroup()}
      </FinderSide>
      <FinderArea>
        {readDataFilesOfGroup()}
      </FinderArea>
    </FinderContainer>
  );
};
