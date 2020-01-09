import React, { useState } from 'react';
import './Loan.css'

interface Props {
    location: { pathname: string },
    setLoan: (loan: string) => void,
}

const Loan: React.FC<Props> = (props) => {

    const [cash, setCash] = useState("0");
    const [year, setYear] = useState("2");

    const doLoan = () => {
        props.setLoan(estimateLoan(cash, year).toString());
    }

    const estimateLoan = (cash: string, year: string) => {

        if (!cash || !year) {
            return 0;
        }

        const cashInt = parseInt(cash)

        const cashRate = cashInt * 1.15;
        const yearRate = (parseInt(year) * 0.15) * cashInt;

        return cashRate + yearRate;
    }

    return (
        <>
            <h2 data-testid="title">How much do you want to loan?</h2>
            <div className="slideContainer">
                <input
                    className="slider"
                    data-testid="cash"
                    type="range"
                    min="5000"
                    max="10000000"
                    step="5000"
                    name="value"
                    placeholder="How much?"
                    value={cash}
                    onChange={event => setCash(event.target.value)}
                />
                <p>{parseInt(cash).toLocaleString()},- kr</p>
            </div>
            <div className="slideContainer">
                <input
                    className="slider"
                    data-testid="years"
                    type="range"
                    min="0"
                    max="25"
                    step="1"
                    name="years"
                    placeholder="How many years?"
                    value={year}
                    onChange={event => setYear(event.target.value)}
                />
                <p>{year} years</p>
            </div>
            <span>You have to pay us in total <span data-testid="calculation">{estimateLoan(cash, year).toLocaleString()}</span>,- kr</span>

            <br />
            <button data-testid="submit" onClick={() => doLoan()}>Apply for the loan</button>
        </>
    );
}

export default Loan;
