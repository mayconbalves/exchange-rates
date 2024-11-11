import { fireEvent, render, screen } from '@testing-library/react'
import Pagination from '.'
import { PaginationProps } from './types'

describe('Pagination Component', () => {
  const defaultProps: PaginationProps = {
    currentPage: 1,
    itemsPerPage: 5,
    totalItems: 20,
    onPageChange: jest.fn()
  }

  it('Should render pagination component', () => {
    render(<Pagination {...defaultProps} />)
    const paginationElement = screen.getByText(/Página 1 de 4/i)
    expect(paginationElement).toBeInTheDocument()
  })

  it('Should disable "Anterior" button on the first page', () => {
    render(<Pagination {...defaultProps} />)
    const prevButton = screen.getByRole('button', { name: /anterior/i })
    expect(prevButton).toBeDisabled()
  })

  it('Should enable "Próxima" button on the first page', () => {
    render(<Pagination {...defaultProps} />)
    const nextButton = screen.getByRole('button', { name: /próxima/i })
    expect(nextButton).toBeEnabled()
  })

  it('Should disable "Próxima" button on the last page', () => {
    render(<Pagination {...defaultProps} currentPage={4} />)
    const nextButton = screen.getByRole('button', { name: /próxima/i })
    expect(nextButton).toBeDisabled()
  })

  it('Should enable "Anterior" button on pages after the first', () => {
    render(<Pagination {...defaultProps} currentPage={2} />)
    const prevButton = screen.getByRole('button', { name: /anterior/i })
    expect(prevButton).toBeEnabled()
  })

  it('Should call onPageChange with the next page number when "Próxima" button is clicked', () => {
    const onPageChange = jest.fn()
    render(<Pagination {...defaultProps} onPageChange={onPageChange} />)
    const nextButton = screen.getByRole('button', { name: /próxima/i })
    fireEvent.click(nextButton)
    expect(onPageChange).toHaveBeenCalledWith(2)
  })

  it('Should call onPageChange with the previous page number when "Anterior" button is clicked', () => {
    const onPageChange = jest.fn()
    render(<Pagination {...defaultProps} currentPage={2} onPageChange={onPageChange} />)
    const prevButton = screen.getByRole('button', { name: /anterior/i })
    fireEvent.click(prevButton)
    expect(onPageChange).toHaveBeenCalledWith(1)
  })

  it('Should display the correct page number and total pages', () => {
    render(<Pagination {...defaultProps} currentPage={3} />)
    const pageInfo = screen.getByText(/Página 3 de 4/i)
    expect(pageInfo).toBeInTheDocument()
  })

  it('Should be create snapshot', () => {
    const { container } = render(<Pagination {...defaultProps} currentPage={3} />)

    expect(container).toMatchSnapshot()
  })
})
