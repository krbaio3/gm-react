import * as React from 'react';
import { Color } from './color';
import { ColorSliderComponent } from './colorSlider';

interface Props {
  color: Color;
  onColorUpdate: (color: Color) => void;
}

export const ColorPicker = (props: Props) => {
  const onChange = (colorChanel) => (colorValue : number) => {
    props.onColorUpdate({ ...props.color,[colorChanel] : colorValue });
  };
  //   const red = (colorChanel === 'red') ? colorValue : props.color.red;
  //   const blue = (colorChanel === 'blue') ? colorValue : props.color.blue;
  //   const green = (colorChanel === 'green') ? colorValue : props.color.green;
  //   props.onColorUpdate({
  //     red,
  //     green,
  //     blue,
  //   });
  // };

  // const onChange = (colorChanel) => (event) => {
  //   const red = (colorChanel === 'red') ? event.target.value : props.color.red;
  //   const blue = (colorChanel === 'blue') ? event.target.value : props.color.blue;
  //   const green = (colorChanel === 'green') ? event.target.value : props.color.green;
  //   props.onColorUpdate({
  //     red,
  //     green,
  //     blue,
  //   });
  // };

  return (
    <div>
      <ColorSliderComponent
      value= {props.color.red} 
      onValueUpdated={onChange('red')}
      />
      <ColorSliderComponent
      value= {props.color.blue} 
      onValueUpdated={onChange('blue')}
      />
      <ColorSliderComponent
      value= {props.color.green} 
      onValueUpdated={onChange('green')}
      />
      {/* <div className="row">
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
      </div> */}
    </div>
  );
};
