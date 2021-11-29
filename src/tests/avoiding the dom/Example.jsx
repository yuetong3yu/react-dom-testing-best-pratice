import React, { useState } from 'react'

export const Example = () => {
  const [showFooter, setShowFooter] = useState(false)

  return (
    <>
      <button onClick={() => setShowFooter(!showFooter)}>to show</button>
      <footer data-testid="footer">Hi im footer</footer>
    </>
  )
}