import * as React from 'react';
import { Color } from './color';

interface Props{
  color: Color;
}

export const ColorDisplayer = (props : Props) => {
  const divStyle = {
    width: '120px',
    height: '80px',
    backgroundColor: `rgb(
        ${props.color.red},
        ${props.color.green},
        ${props.color.blue}
    )`,
  };

  return (
      <div style={divStyle}></div>
  );
};
