import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Box } from './Box'

describe('Box', () => {
  it('displays box', () => {
    render(<Box>Test</Box>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})