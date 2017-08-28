import * as React from 'react';

interface Props {
  placeholder : string;
  onSearchClick: () => void;
  icono : string;
  // disabled : boolean;
}

export const InputPerformance = (props: Props) => {
  const onSearch = (event) => {
    props.onSearchClick();
  };
  return (
        <div className="col-xs-4 col-lg-6">
            <div className="input-group">
                <input type="text" className="form-control" placeholder={props.placeholder} />
                <span className="input-group-btn">
                    <button className="btn btn-info" type="button" onClick = {onSearch}>
                    <i className={props.icono} aria-hidden="true" />
                    </button>
                </span>
            </div>
        </div>
        
  );
};
