import * as React from 'react';
import { Color } from './color';

interface Props {
  color: Color;
  onColorUpdate: (color: Color) => void;
}

export const ColorPicker = (props: Props) => {
  const onChange = (component) => (event) => {
    const red = (component === 'red') ? event.target.value : props.color.red;
    const blue = (component === 'blue') ? event.target.value : props.color.blue;
    const green = (component === 'green') ? event.target.value : props.color.green;
    props.onColorUpdate({
      red,
      green,
      blue,
    });
  };

  return (
    <div>
      <div className="row">
        <input type="range"
          min="0"
          max="255"
          value={props.color.red}
          onChange={onChange('red')}
        />
        {props.color.red}
      </div>
      <div className="row">
        <input type="range"
          min="0"
          max="255"
          value={props.color.green}
          onChange={onChange('green')}
        />
        {props.color.green}
      </div>
      <div className="row">
        <input type="range"
          min="0"
          max="255"
          value={props.color.blue}
          onChange={onChange('blue')}
        />
        {props.color.blue}
      </div>
    </div>
  );
};
