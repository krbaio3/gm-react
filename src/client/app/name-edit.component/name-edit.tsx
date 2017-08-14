import * as React from 'react';

interface Props {
  userName: string;
  editingUserName: string;
  onEditingNameUpdated: (newEditing: string) => void;
  onNameUpdatedRequest: () => void;
}

// tslint:disable-next-line:max-line-length
// tslint:disable-next-line:variable-name
export const NameEditComponent = ({ userName, editingUserName, onEditingNameUpdated, onNameUpdatedRequest } : Props) => {

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
              onClick={onNameUpdateRequestSubmit}
              disabled={editingUserName == '' || userName == editingUserName}/>
    </div>
  );

};
