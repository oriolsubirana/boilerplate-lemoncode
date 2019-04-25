import * as React from 'react';
import {HelloComponent} from './hello';
import { NameEditComponent } from './nameEdit';

interface Props {

}

interface State {
    name: string;
    editingUsername: string;
}

export class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        const defaultUsername = 'defaultusername';
        this.state = {name: defaultUsername, editingUsername: defaultUsername};
    }


setUsernameState = () => {
    this.setState({name: this.state.editingUsername})
}

updateEditingName = (editingName: string) => {
    this.setState({editingUsername: editingName})
}

chedDisable = () => !this.state.editingUsername || this.state.editingUsername === this.state.name;

render() {
    return (
        <>
        <HelloComponent userName={this.state.name} />
        <NameEditComponent 
            editingName={this.state.editingUsername}
            onEditingNameUpdated={this.updateEditingName}
            onNameSubmit={this.setUsernameState}
            disabled= {this.chedDisable()} />
       </>
    )
}

}
/*
//Custom hook
const useName = () => {
    //nombre default
    const [name, setName] = React.useState('Pep');
    //nombre editado
    const [editingName, setEditingName] = React.useState("default user name");
    
    //simular ajax
    const loadUsername = () => {
        setTimeout(() => {
            setName("name from async call");
            setEditingName("name from async call");
        }, 500)
    }
    return {name, editingName, setEditingName, loadUsername, setName}
}

export const App = () => {

    const {name, editingName, setEditingName, loadUsername, setName} = useName();

    //seteamos el nombre
    const setUsernameState = () => {
        setName(editingName);
    }

    //con los claudators solo se ejecuta una vez el loadUsername
    //cargamos el nombre de la llamada ajax
    React.useEffect(() => {
        loadUsername();
    },[])

    const chedDisable = () => !editingName || editingName === name;

   return (
       <>
        <HelloComponent userName={name} />
        <NameEditComponent 
            editingName={editingName}
            onEditingNameUpdated={setEditingName}
            onNameSubmit={setUsernameState}
            disabled= {chedDisable()} />
       </>
   )
}
*/