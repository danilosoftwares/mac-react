import React from "react";
import { Finder } from "../Finder";
import {
  Container,
} from './styles';

interface propsDesktop {
  finders: Array<number>
}

export const Desktop: React.FC<propsDesktop> = ({ finders }) => {
  return (
    <Container>
      {finders.map((item, index) => {
        return <Finder key={index} left={(index + 1) * 20} top={(index + 1) * 50} />
      })}
    </Container>
  );
};
