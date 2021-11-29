import React from 'react'
import { screen, render } from '@testing-library/react'
import { Example } from './Example'

test('DOM Showing', () => {
  render(<Example />)

  expect(screen.getByTestId('footer')).toHaveTextContent('Hi im footer')
})
