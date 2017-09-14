import * as React from 'react';

interface Props {
  observaciones?: string;
}

const defaultProps = {};

export const TextArea = ({ observaciones }: Props) => {

  return (
    <div className="form-group col-xs-4 col-lg-6 mt-2">
          <label htmlFor="obervationTextarea">{observaciones}</label>
          <textarea className="form-control" id="obervationTextarea" ></textarea>
        </div>
  );
};

// InputSimple.defaultProps = defaultProps;
