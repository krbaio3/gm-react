import * as React from 'react';
import { HelloComponent } from './hello.component/hello';
import { NameEditComponent } from './name-edit.component/name-edit';
import { HomeComponent } from './home.component/home';

interface Props {

}
// si agregamos la propuedad password, el objeto State, deberíamos inicializarlo también
interface State {
  userName: string;
  editingUserName: string;
}


export class App extends React.Component<{}, State>{

  constructor(props) {
    super(props);

    // incicializamos los dos objetos como hesmos dicho en la inteface
    this.state = { userName: ' defaultUserName', editingUserName : 'defaultEditingUserName' };
    this.setUserNameState = this.setUserNameState.bind(this);
    this.updateEditingName = this.updateEditingName.bind(this);

    setTimeout(() => {
      this.setState({ userName : 'yo mando', editingUserName : 'yo mando' });
    }, 5000);
  }

  setUserNameState() {
    this.setState({ userName: this.state.editingUserName });
  }

  updateEditingName (editingName : string) : void {
    this.setState({ editingUserName : editingName } as State);
  }

  public render() {
    return (
            <div>
                <HelloComponent userName={this.state.userName} />
                <NameEditComponent
                    editingUserName={this.state.editingUserName}
                    onEditingNameUpdated={this.updateEditingName}
                    onNameUpdatedRequest = {this.setUserNameState}
                    userName = {this.state.userName} />
                <HomeComponent></HomeComponent>
            </div>

    );  
  }
}
