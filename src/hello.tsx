import * as React from 'react';

interface Props {
    userName: string;
}

export const HelloComponent = (props: Props) => {
    const {userName} = props;
    return <h2>Hello {userName}!</h2>
}
