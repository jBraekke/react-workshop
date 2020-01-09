import React from 'react';

interface Props {
    loan: string
}

const Account: React.FC<Props> = (props) => {
    return (<>
        <h2>Your account</h2>
        <p>Total loan: <span data-testid="totalLoan">{parseInt(props.loan).toLocaleString()}</span>,- kr</p>
    </>);
}

export default Account;