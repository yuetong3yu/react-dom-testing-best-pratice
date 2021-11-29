import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'

test('typing in the textarea', () => {
  render(<textarea />)

  fireEvent.change(screen.getByRole('textbox'), {
    target: {
      value: 'Hello World',
    },
  })

  expect(screen.getByRole('textbox')).toHaveValue('Hello World')
})
