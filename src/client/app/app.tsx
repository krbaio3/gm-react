import * as React from 'react';
import { HelloComponent } from './hello.component/hello';
import { NameEditComponent } from './name-edit.component/name-edit';
import { HomeComponent } from './home.component/home';
import { Color } from './colorPicker/color';
import { ColorPicker } from './colorPicker/colorPicker';
import { ColorDisplayer } from './colorPicker/colorDisplayer';

interface Props {

}
// si agregamos la propuedad password, el objeto State, deberíamos inicializarlo también
interface State {
  userName: string;
  editingUserName: string;
  color: Color;
}


export class App extends React.Component<{}, State>{

  constructor(props) {
    super(props);

    // incicializamos los dos objetos como hesmos dicho en la inteface
    this.state = { userName: ' defaultUserName', editingUserName: 'defaultEditingUserName', color:{ red:90, green:50, blue:70 } };
    this.setUserNameState = this.setUserNameState.bind(this);
    this.updateEditingName = this.updateEditingName.bind(this);
    this.setColorState = this.setColorState.bind(this);

    setTimeout(() => {
      this.setState({ userName: 'yo mando', editingUserName: 'yo mando' });
    },         5000);
  }

  setColorState(newColor: Color) {
    this.setState({ color: newColor });
  }

  setUserNameState() {
    this.setState({ userName: this.state.editingUserName });
  }

  updateEditingName(editingName: string): void {
    this.setState({ editingUserName: editingName } as State);
  }

  public render() {
    return (
      <div>
        <ColorDisplayer
          color={this.state.color}
        />
        <span>Color: [
          red: {this.state.color.red},
          green: {this.state.color.green},
          blue: { this.state.color.blue}]</span>
        <ColorPicker 
        color={this.state.color}
        onColorUpdate={this.setColorState}
        />
        {/* <HelloComponent userName={this.state.userName} />
        <NameEditComponent
          editingUserName={this.state.editingUserName}
          onEditingNameUpdated={this.updateEditingName}
          onNameUpdatedRequest={this.setUserNameState}
          userName={this.state.userName} /> */}
        {/* <HomeComponent></HomeComponent> */}
      </div>

    );
  }
}
