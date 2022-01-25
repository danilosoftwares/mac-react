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
import { loadList } from "../../data/folders";
import { useDrag } from "@use-gesture/react";
import { idText } from "typescript";
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

interface propsFinder {
  left: number;
  top: number;
}

export const Finder: React.FC<propsFinder> = ({ left, top }) => {
  const [posLogo, setLogo] = useState({ x: 0, y: 50 });
  const [canMove, setCanMove] = useState(false);
  const [idx, setIDX] = useState(99999);

  const bindLogo = useDrag((params) => {
    params.event.preventDefault();
    if (canMove) {
      setIDX(idx + 9999);
      setLogo({ x: params.offset[0], y: params.offset[1], });
    }
  });

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

    <FinderContainer {...bindLogo()} key={getNumber()} left={posLogo.x} top={posLogo.y}>
      <FinderSide>
        <FinderCloseBar onMouseMove={(e) => setCanMove(true)} onMouseLeave={(e) => setCanMove(false)} >
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
