import * as React from 'react';

interface Props {
  userName?: string;
}

export const HelloComponent = (props: Props) => {
  return (
    <h2>Esto es la Home de {props.userName} !</h2>
  );
};
