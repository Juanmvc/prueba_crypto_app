import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Grid } from './Grid'

describe('Grid', () => {
  it('Should render Grid', () => {
    render(<Grid gridRowGap={10}><h1>This is the Grid component</h1></Grid>)
    expect(screen.getByText('This is the Grid component')).toBeInTheDocument()
  })
})
