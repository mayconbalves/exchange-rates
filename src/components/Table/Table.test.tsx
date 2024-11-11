import { render, screen } from '@testing-library/react'
import Table from '.'
import { TableProps } from './types'

describe('Table Component', () => {
  const sampleRates = [
    { rate: 'USD', value: 1.12, date: '10:00', timestamp: 1731285422 },
    { rate: 'GBP', value: 0.85, date: '10:05', timestamp: 1731285422 },
    { rate: 'JPY', value: 130.5, date: '10:10', timestamp: 1731285422 }
  ]

  const defaultProps: TableProps = {
    rates: sampleRates,
    date: '2024-11-09'
  }

  it('Should render the table with correct headers', () => {
    render(<Table {...defaultProps} />)
    expect(screen.getByText(/Moeda/i)).toBeInTheDocument()
    expect(screen.getByText(/Valor \(em EUR\)/i)).toBeInTheDocument()
    expect(screen.getByText(/Horário/i)).toBeInTheDocument()
  })

  it('Should render correct number of rows based on rates', () => {
    render(<Table {...defaultProps} />)
    const rows = screen.getAllByRole('row')
    expect(rows.length).toBe(sampleRates.length + 1)
  })

  it('Should be create snapshot', () => {
    const { container } = render(<Table {...defaultProps} />)

    expect(container).toMatchSnapshot()
  })
})
