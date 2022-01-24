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
  onClick?: Function;
}

export const DockItem: React.FC<DockItemProps> = ({ source, onClick }) => {
  return (
    <ImageItemDock onClick={(e) => onClick?.(e)} src={source} alt="fireSpot">
    </ImageItemDock>
  );
};
