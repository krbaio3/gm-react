  import * as React from 'react';

  export const HelloComponent = (props: {userName: string}) => {
    return (
      <h2>Hello component {props.userName} !</h2>
    );
  }
