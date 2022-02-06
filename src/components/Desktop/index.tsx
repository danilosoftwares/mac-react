import React from "react";
import { propsFinderTyped } from "../../store/types";
import { Finder } from "../Finder";
import {
  Container,
} from './styles';

const Desktop: React.FC<propsFinderTyped> = ({ finders }) => {

  return (
    <Container>
      {finders.map((item, index) => {
        return item.active ? <Finder id={item.id} key={index} left={(index + 1) * 20} top={(index + 1) * 50} /> : null
      })}
    </Container>
  );
};



export { Desktop };