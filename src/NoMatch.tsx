import React from 'react';

interface Props {
    location: { pathname: string }
}

const NoMatch: React.FC<Props> = (props) => {
    return (
        <div data-testid="noMatch">
            <h1>No Match for "{props.location.pathname}"</h1>
        </div>
    );
}

export default NoMatch;
