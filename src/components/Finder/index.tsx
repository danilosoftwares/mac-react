import React from "react";
import {
  FinderSide,
  FinderContainer,
  FinderCloseBar,
  FinderArea,
  FinderButtonsClose,
  FinderLabelGroupFolders,
  FinderGroupFolders,
  FinderLabelGroup,
  FinderIconLabelGroup,
  FinderGroupLine,
  FinderContent,
} from './styles';
import folder_label from './icon_finder_label.svg';
import { Header } from "./Header";
import { Item } from "./Item";


export const Finder: React.FC = () => {

  const createGroup = (title: string, list: Array<string>) => {
    return <FinderGroupFolders><FinderLabelGroupFolders>{title}</FinderLabelGroupFolders> {createGroupList(list)}</FinderGroupFolders>
  }

  const createGroupList = (list: Array<string>) => {
    return list.map((item, index) => {
      return (
        <FinderGroupLine>
          <FinderIconLabelGroup src={folder_label} alt="icon"></FinderIconLabelGroup>
          <FinderLabelGroup>{item}</FinderLabelGroup>
        </FinderGroupLine>
      )
    });
  }

  return (
    <FinderContainer>
      <FinderSide>
        <FinderCloseBar>
          <FinderButtonsClose color="red"></FinderButtonsClose>
          <FinderButtonsClose color="yellow"></FinderButtonsClose>
          <FinderButtonsClose color="green"></FinderButtonsClose>
        </FinderCloseBar>
        {createGroup("Favorites", ["Desktop", "Downlaods", "Recents", "Documents"])}
        {createGroup("iCloud", ["iCloud Drive", "Documents", "Desktop"])}
      </FinderSide>
      <FinderArea>
        <Header></Header>
        <FinderContent>
          <Item label={"Fotos de Verão"} icon="png"></Item>
          <Item label={"Receita de bolo"} icon="text"></Item>
          <Item label={"Receita de bolo"} icon="text"></Item>
          <Item label={"Receita de bolo"} icon="text"></Item>
          <Item label={"Receita de bolo"} icon="text"></Item>
          <Item label={"Receita de bolo"} icon="text"></Item>
          <Item label={"Receita de bolo"} icon="text"></Item>
          <Item label={"Receita de bolo"} icon="text"></Item>
          <Item label={"Receita de bolo"} icon="text"></Item>
          <Item label={"Receita de bolo"} icon="text"></Item>
          <Item label={"Receita de bolo"} icon="text"></Item>
          <Item label={"Receita de bolo"} icon="text"></Item>
          <Item label={"Receita de bolo"} icon="text"></Item>
          <Item label={"Receita de bolo"} icon="text"></Item>
          <Item label={"Receita de bolo"} icon="text"></Item>
          <Item label={"Receita de bolo"} icon="text"></Item>
          <Item label={"Receita de bolo"} icon="text"></Item>
          <Item label={"Receita de bolo"} icon="text"></Item>
        </FinderContent>
      </FinderArea>
    </FinderContainer>
  );
};
