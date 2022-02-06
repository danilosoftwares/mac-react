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
import { propsFinderContentItem, propsGroup, propsItemGroup } from "../../store/types";
import { useDispatch } from "react-redux";
import { decrement } from "../../store/store";

export interface prosFinderGroupLine {
  label?: string;
  selected?: boolean;
  color?: string;
  items?: Array<propsFinderContentItem>
}

interface propsFinder {
  left: number;
  top: number;
  id: number;
}

export const Finder: React.FC<propsFinder> = ({ id, left, top }) => {
  const [posLogo, setLogo] = useState({ x: 0, y: 50 });
  const [canMove, setCanMove] = useState(false);
  const [canDelete, setCanDelete] = useState(false);
  const [idx, setIDX] = useState(99999);
  const [identificador, setIdentificador] = useState<number>(id);
  const dispatch = useDispatch();

  const bindLogo = useDrag((params) => {
    params.event.preventDefault();
    if (canMove) {
      const novo = { x: Math.trunc(params.offset[0]), y: Math.trunc(params.offset[1] + 50), };
      if (novo !== posLogo) {
        setIDX(idx + 9999);
        setLogo(novo);
      }
    }
    if (canDelete) {
      setCanDelete(false);
      dispatch(decrement(identificador));
    }
  });

  const [listFiles, setListFiles] = useState<propsGroup[]>(loadList());

  const getNumber = () => {
    const x = Math.floor(Math.random() * 9999) + 1;
    return x;
  }

  const createGroup = (index: number, title?: string, list?: Array<propsItemGroup>) => {
    return <FinderGroupFolders key={index}><FinderLabelGroupFolders key={index} >{title}</FinderLabelGroupFolders> {createGroupList(title, list)}</FinderGroupFolders>
  }

  const createGroupList = (title?: string, list?: Array<propsItemGroup>) => {
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

    <FinderContainer {...bindLogo()} key={getNumber()} left={posLogo.x} top={posLogo.y} style={{ touchAction: 'none' }}>
      <FinderSide>
        <FinderCloseBar onMouseMove={(e) => setCanMove(true)} onMouseLeave={(e) => setCanMove(false)} >
          <FinderCircle onMouseMove={(e) => setCanDelete(true)} onMouseLeave={(e) => setCanDelete(false)} color={"red"}><FinderIconButtonCircle src={button_red} alt="nenhum"></FinderIconButtonCircle> </FinderCircle>
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
