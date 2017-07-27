import * as React from 'react';

interface Props {
  editingUserName: string;
  onEditingNameUpdated: (newEditing: string) => void;
  onNameUpdatedRequest: () => void;
}

// tslint:disable-next-line:max-line-length
// tslint:disable-next-line:variable-name
export const NameEditComponent = ({ editingUserName, onEditingNameUpdated, onNameUpdatedRequest } : Props) => {
  
    // this.onChangeEditingName = this.onChangeEditingName.bind(this);
    // this.onNameUpdateRequestSubmit = this.onNameUpdateRequestSubmit.bind(this);
  

  const onChangeEditingName = (event) => {
    onEditingNameUpdated(event.target.value);
  };
  const onNameUpdateRequestSubmit = (event) => {
    onNameUpdatedRequest();
  };

  return (
    <div>
      <label>Update Name</label>
      <input  type="text" 
              value={editingUserName} 
              onChange={onChangeEditingName}/>

      <input  type="submit" 
              value="Change"
              className="btn btn-success"
              onClick={onNameUpdateRequestSubmit}/>
    </div>
  );

};
