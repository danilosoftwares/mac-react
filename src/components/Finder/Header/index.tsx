import React from "react";
import {
  Container, FormatFilesContainer, LabelFolder, LabelFolderContainer, PriorNextContainer, SearchFilesContainer, ShareTagFilesContainer, SubContainer,
} from './styles';
import arrow_left_header from './icons/arrow_left_header.svg';
import arrow_right_header from './icons/arrow_right_header.svg';
import format_icon_files from './icons/format_icon_files.svg';
import position_icon_files from './icons/position_icon_files.svg';
import option_icon_files from './icons/option_icon_files.svg';
import export_icon_files from './icons/export_icon_files.svg';
import tag_icon_files from './icons/tag_icon_files.svg';
import doble_arrow_files from './icons/doble_arrow_files.svg';
import search_icon_files from './icons/search_icon_files.svg';


export const Header: React.FC = () => {
  return (
    <Container>
      <SubContainer>
        <PriorNextContainer>
          <img src={arrow_left_header} alt="icon"></img>
          <img src={arrow_right_header} alt="icon"></img>
        </PriorNextContainer>
        <LabelFolderContainer>
          <LabelFolder>{"Recente"}</LabelFolder>
        </LabelFolderContainer>
        <FormatFilesContainer>
          <img src={format_icon_files} alt="icon"></img>
          <img src={position_icon_files} alt="icon"></img>
          <img src={option_icon_files} alt="icon"></img>
        </FormatFilesContainer>
        <ShareTagFilesContainer>
          <img src={export_icon_files} alt="icon"></img>
          <img src={tag_icon_files} alt="icon"></img>
        </ShareTagFilesContainer>
        <SearchFilesContainer>
          <img src={search_icon_files} alt="icon"></img>
        </SearchFilesContainer>
      </SubContainer>
    </Container>
  );
};
