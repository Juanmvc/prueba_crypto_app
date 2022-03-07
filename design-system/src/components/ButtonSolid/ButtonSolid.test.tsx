import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ButtonSolid } from './ButtonSolid'

describe('Button', () => {
  it('renders children', () => {
    render(<ButtonSolid onClick={() => console.log("CLICK")}>Hello</ButtonSolid>)
    expect(screen.getByRole('button', { name: 'Hello' })).toBeInTheDocument()
  })

  describe('when it is disabled', () => {
    it('does not call onClick callback', () => {
      let callback = jest.fn()
      render(
        <ButtonSolid onClick={callback} disabled>
          Hello
        </ButtonSolid>,
      )
      fireEvent.click(screen.getByRole('button', { name: 'Hello' }))
      expect(callback).not.toHaveBeenCalled()
    })
  })
})