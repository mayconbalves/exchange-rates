import { render, screen } from '@testing-library/react'
import Footer from '.'

describe('Footer Component', () => {
  it('Should be render component', () => {
    render(<Footer />)
    const footerElement = screen.getByRole('contentinfo')
    expect(footerElement).toBeInTheDocument()
  })

  it('Should be render image logo', () => {
    render(<Footer />)
    const imageElement = screen.getByRole('img', { name: /b3 logo/i })
    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('src', './logo.png')
  })

  it('Should be create snapshot', () => {
    const { container } = render(<Footer />)

    expect(container).toMatchSnapshot()
  })
})
