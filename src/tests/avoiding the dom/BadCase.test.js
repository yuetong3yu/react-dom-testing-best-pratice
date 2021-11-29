import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Example } from './Example'

test('DOM Showing', () => {
  render(<Example />)

  // ⚠️ this is bad, because you are using `querySelector` api, and it was not be recommended
  const dom = document.querySelector('#primary-btn')

  userEvent.click(dom)

  expect(screen.getByTestId('footer')).toHaveTextContent('Hi im footer')
})
