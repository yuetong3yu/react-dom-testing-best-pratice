import React from 'react'
import userEvent from '@testing-library/user-event'
import { screen, render } from '@testing-library/react'

import { Example } from './Example'

test('Good Case of Finding Node', () => {
  render(<Example />)

  // use `getByRole` to get the `button` type
  const button = screen.getByRole('button')

  userEvent.click(button)

  // get `getByTestId` to get the specific react node.
  expect(screen.getByTestId('footer')).toBeInTheDocument()
})
