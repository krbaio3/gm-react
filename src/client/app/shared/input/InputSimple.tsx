import * as React from 'react';

interface Props {
  placeholder: string;
  disabled : boolean;
}

export const InputSimple = ({ placeholder, disabled }: Props) => {
  return (
        <div className="col-xs-4 col-lg-6">
            <div className="input-group">
                <input type="text" className="form-control" 
                placeholder={placeholder} 
                disabled = {disabled} />
                <span className="input-group-btn"/>
            </div>
        </div>
  );
};
