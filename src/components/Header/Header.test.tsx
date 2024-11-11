import { render, screen } from '@testing-library/react'
import Header from '.'

describe('Header Component', () => {
  it('Should render the header element', () => {
    render(<Header />)
    const headerElement = screen.getByRole('banner')
    expect(headerElement).toBeInTheDocument()
  })

  it('Should display the logo image with correct alt text', () => {
    render(<Header />)
    const logoImage = screen.getByRole('img', { name: /b3 logo/i })
    expect(logoImage).toBeInTheDocument()
    expect(logoImage).toHaveAttribute('src', './logo.png')
  })

  it('Should display the title text "Exchange Rates"', () => {
    render(<Header />)
    const titleElement = screen.getByText(/exchange rates/i)
    expect(titleElement).toBeInTheDocument()
  })

  it('Should be create snapshot', () => {
    const { container } = render(<Header />)

    expect(container).toMatchSnapshot()
  })
})
