import React from "react";
import {
  Container, Imaging, ContainerImage, LabelFile,
} from './styles';
import png from './images/png.png';
import plain from './images/plain.png';
import quick from './images/quick.png';
import text from './images/text.png';
import folder from './images/folder.png';

interface ItemProps {
  label: string;
  icon: string;
}

export const Item: React.FC<ItemProps> = ({ label, icon }) => {

  const getImage = () => {
    return icon === "png" ? png : icon === "quick" ? quick : icon === "text" ? text : icon === "folder" ? folder : plain;
  }

  return (
    <Container>
      <ContainerImage>
        <Imaging src={getImage()} alt="icon"></Imaging>
      </ContainerImage>
      <LabelFile>{label}</LabelFile>
    </Container>
  );
};
