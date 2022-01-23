import React from "react";
import {
  Container, ImageContainer, LabelFile,
} from './styles';
import png from './images/png.png';
import plain from './images/plain.png';
import quick from './images/quick.png';
import text from './images/text.png';

interface ItemProps {
  label: string;
  icon: | "png" | "quick" | "text" | "plain";
}

export const Item: React.FC<ItemProps> = ({ label, icon }) => {

  const getImage = () => {
    return icon === "png" ? png : icon === "quick" ? quick : icon === "text" ? text : plain;
  }

  return (
    <Container>
      <ImageContainer src={getImage()} alt="icon"></ImageContainer>
      <LabelFile>{label}</LabelFile>
    </Container>
  );
};
