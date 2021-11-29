import React, { useState } from 'react'

export const Example = () => {
  const [showFooter, setShowFooter] = useState(false)

  return (
    <>
      <button id="primary-btn" onClick={() => setShowFooter(!showFooter)}>
        to show
      </button>
      {showFooter ? <footer data-testid="footer">Hi im footer</footer> : null}
    </>
  )
}
