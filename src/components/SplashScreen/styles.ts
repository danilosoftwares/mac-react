import styled, { keyframes } from "styled-components";

const breatheAnimation = keyframes`
 0%   { width: 0%  ; }
 30%  { width: 30% ; }
 40%  { width: 40% ; }
 100% { width: 100%; }
`

const opacityAnimation = keyframes`
 0%   { opacity: 0%  ; }
 30%  { opacity: 30% ; }
 40%  { opacity: 40% ; }
 100% { opacity: 100%; }
`

export interface prosDockPrincipal {
  open?: boolean;
}


export const SplashContainer = styled.div`
  position: absolute;
  background-color: black;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;  
  flex-direction: column;  
`

export const DockPrincipal = styled.div<prosDockPrincipal>`
    animation-name: ${opacityAnimation};
    animation-duration: 1s;    
    display: ${p => p.open ? "block" : "none" };
`

export const BarProgress = styled.div`
  height: 5px;
  background-color: rgb(71,71,71);
  width: 182px;
  border-radius: 5px;
`

export const ProgressBarValue = styled.div`
    animation-name: ${breatheAnimation};
    animation-duration: 3s;
    animation-iteration-count: infinite;

    background-color: white;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 5px;
`