import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { CryptoCard } from './CryptoCard'

describe('Box', () => {
  it('displays CryptoCard', () => {
    render(<CryptoCard
        name="Ethereum"
        value="$28,729.01"
        abreviation="ETH"
        variant="-8.23%"
    />)
    expect(screen.getByText('Ethereum')).toBeInTheDocument()
    expect(screen.getByText('$28,729.01')).toBeInTheDocument()
    expect(screen.getByText('ETH')).toBeInTheDocument()
    expect(screen.getByText('-8.23%')).toBeInTheDocument()
  })
})