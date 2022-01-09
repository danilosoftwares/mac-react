import React from "react";
import {
  DockContainer,
  ImageItemDock
} from './styles';


export const Dock: React.FC = ({ children }) => {
  return (
    <DockContainer>
      {children}
    </DockContainer>
  );
};

interface DockItemProps {
  source: string;
}

export const DockItem: React.FC<DockItemProps> = ({ source }) => {
  return (
    <ImageItemDock src={source} alt="fireSpot">
    </ImageItemDock>
  );
};
