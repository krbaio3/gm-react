import * as React from 'react';

interface Props {
  title?: string;
  text?: string;
  icono?: string;
  tipo?: string;
  value?: string;
  children?: any;
  data?: any;
}

const defaultProps = {
  disabled: false,
  icono: '',
  tipo: 'text',
  title: 'ejemplo',
  text: 'ejemplo',
  value: 'vacio',
  data: [],
};

export const InputDropDown: React.SFC<Props> = (props) => {



  return (

    <div className="col-12 col-sm-6 col-lg-3 mb-2">
      <div className="input-group">
        <input type="text"
          className="form-control"
          aria-label="Text input with dropdown button" >
          {props.children}
        </input>
        <div className="input-group-btn">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            {props.title || defaultProps.title}
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            {/* {props.data.map((item) => {
              return (
                <span>{item}</span>
              );
            })} */}
            <span className="dropdown-item">Action</span>
            <span className="dropdown-item">Another action</span>
            <span className="dropdown-item">Something else here</span>
            <div role="separator" className="dropdown-divider"></div>
            <span className="dropdown-item">Separated link</span>
          </div>
        </div>
      </div>
    </div>
  );
};

