import * as React from 'react';
// import { Color } from './color';

interface Props {
  value: number;
  onValueUpdated: (newValue : number) => void;
}

export const ColorSliderComponent = (props: Props) => {
  const onChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    props.onValueUpdated(Number(event.target.value));
  };

  return (
        <div>
            <input type="range"
                    min= "0"
                    max="255"
                    value= {props.value}
                    onChange={onChange}/>
        </div>
  );
};
