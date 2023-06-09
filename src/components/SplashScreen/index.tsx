import React, { useEffect, useState } from "react";
import {
  BarProgress,
  DockPrincipal,
  ProgressBarValue,
  SplashContainer,
} from './styles';
import { ReactComponent as Logo } from '../../images/splashScreen.svg';

export const SplashScreen: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setOpen(true);
    }, 2500);
    return () => {
        clearInterval(interval);
    }
  });

  return (
      // open ? <>      <DockPrincipal>{children}</DockPrincipal></> :
      <SplashContainer>
      <DockPrincipal open={open}>{children}</DockPrincipal>      
      <Logo height={200} />
      <BarProgress><ProgressBarValue/></BarProgress>
      </SplashContainer>      
  );
};
