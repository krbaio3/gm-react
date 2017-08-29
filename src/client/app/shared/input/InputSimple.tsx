import * as React from 'react';

interface Props {
  placeholder?: string;
  disabled?: boolean;
  icono?: string;
  tipo?: string;
}

const defaultProps = {
  disabled : false,
  icono: '',
  tipo: 'text',
};

export const InputSimple = ({ placeholder, disabled, icono, tipo }: Props) => {

  return (
    <div className="col-xs-4 col-lg-6 mb-2">
      <div className="input-group">
        <input type={tipo} className="form-control"
          placeholder={placeholder}
          disabled={disabled} />
        <span className="input-group-addon">
          <i className={icono} aria-hidden="true" />
        </span>
      </div>
    </div>
  );
};

// InputSimple.defaultProps = defaultProps;
