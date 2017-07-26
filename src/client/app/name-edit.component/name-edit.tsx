import * as React from 'react';

interface Props {
  initialUserName: string;
  onNameUpdated: (newName: string) => any;
}

interface State {
  editingName: string;
}

export class NameEditComponent extends React.Component <Props, State> {
  constructor(props:Props) {
    super(props);

    this.state = { editingName: this.props.initialUserName };
    this.onChangeName = this.onChangeName.bind(this);
  }

  onChangeName(event: any): any {
    this.setState({ editingName: event.target.value });
    console.log(event.target.value);
  }
  onNameSubmit(event : any): any {
    this.props.onNameUpdated(this.state.editingName);
  }

  public render() {
    return (
      <div>
        <label>Update Name</label>
        <input  type="text" 
                value={this.state.editingName} 
                onChange={this.onChangeName}/>

        <input  type="submit" 
                value="Change"
                className="btn btn-default"
                onClick={this.onNameSubmit.bind(this)}/>
      </div>
    );
  }

}
