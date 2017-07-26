import * as React from 'react';
import { HelloComponent } from './hello.component/hello';
import { NameEditComponent } from './name-edit.component/name-edit';

interface Props {

}
// si agregamos la propuedad password, el objeto State, deberíamos inicializarlo también
interface State {
  userName: string;
  password: string;
}


export class App extends React.Component<{}, State>{

  constructor(props) {
    super(props);

    // incicializamos los dos objetos como hesmos dicho en la inteface
    this.state = { userName: ' defaultUserName', password : 'test' };
    this.setUserNameState = this.setUserNameState.bind(this);
  }

  setUserNameState(newName : string) {
    // hacemos una inicialización parcial del State (Esto es moderno)
    this.setState({ userName: newName });
  }

  public render() {
    return (
            <div>
                <HelloComponent userName={this.state.userName} />
                <NameEditComponent
                    initialUserName={this.state.userName}
                    onNameUpdated={this.setUserNameState} />
            </div>

    );
  }
}
