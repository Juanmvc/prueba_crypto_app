import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Icon } from './Icon'

describe('Icon', () => {
  it('Should render Icon', () => {
    render(<Icon name="k-icon-bell"/>)
    expect(screen.getByRole('Icon'))
  })
})
