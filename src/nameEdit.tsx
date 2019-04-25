import * as React from 'react';

interface Props {
    editingName: string;
    onEditingNameUpdated: (newName : string) => void;
    onNameSubmit: () => void;
    disabled: boolean;
}

export const NameEditComponent = (props: Props) => {

    const {editingName, onEditingNameUpdated, onNameSubmit, disabled} = props;

    const onChangeInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        onEditingNameUpdated(e.target.value);
    }

    return (
        <>
         <label>Update name: </label>
         <input value={editingName} onChange={onChangeInput}/>
         <button 
            onClick={onNameSubmit} 
            disabled={disabled}
        >Change</button>
        </>
    );
}