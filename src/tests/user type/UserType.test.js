import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('User Type event', () => {
  render(<textarea onClick={() => console.log('123 click!')} />)

  userEvent.type(screen.getByRole('textbox'), 'Hello {enter}World')

  expect(screen.getByRole('textbox')).toHaveValue('Hello \nWorld')
})
