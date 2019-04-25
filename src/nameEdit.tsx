import * as React from 'react';

interface Props {
    editingName: string;
    onEditingNameUpdated: (newName : string) => void;
    onNameSubmit: () => void;
}

export const NameEditComponent = (props: Props) => {

    const {editingName, onEditingNameUpdated, onNameSubmit} = props;

    const onChangeInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        onEditingNameUpdated(e.target.value);
    }

    return (
        <>
         <label>Update name: </label>
         <input value={editingName} onChange={onChangeInput}/>
         <button onClick={onNameSubmit}>Change</button>
        </>
    );
}