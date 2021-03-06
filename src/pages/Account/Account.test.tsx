import React from 'react';
import { Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'

import App from '../../App';

test('Apply for a loan, and view it in the Account', () => {
    const history = createMemoryHistory()
    const { container, getByText, getByTestId } = render(
      <Router history={history}>
        <App />
      </Router>
    )
    // verify page content for expected route
    // often you'd use a data-testid or role query, but this is also possible
    expect(container.innerHTML).toMatch('Welcome to the bank')
  
    fireEvent.click(getByText(/Loan/i))
  
    const element = getByTestId('title')
    // check that the content changed to the new page
    expect(element.innerHTML).toMatch('How much do you want to loan?')

    fireEvent.change(getByTestId('cash'), { target: { value: '5000' } });
    fireEvent.change(getByTestId('years'), { target: { value: '1' } });

    const calculation = getByTestId('calculation');

    expect(calculation.innerHTML).toEqual("6,500")

    fireEvent.click(getByTestId('submit'));

    fireEvent.click(getByText(/Account/i))

    const totalLoan = getByTestId('totalLoan');

    expect(totalLoan.innerHTML).toEqual("6,500")

  })