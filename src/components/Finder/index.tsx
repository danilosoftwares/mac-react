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
} from './styles';
import folder_label from './icon_finder_label.svg';


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
      <FinderArea></FinderArea>
    </FinderContainer>
  );
};
