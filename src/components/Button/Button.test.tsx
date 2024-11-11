import { fireEvent, render, screen } from '@testing-library/react'
import Button from '.'
import { ButtonProps } from './types'

describe('Button Component', () => {
  const defaultProps: ButtonProps = {
    title: 'Clique Aqui',
    onClick: jest.fn(),
    disabled: false
  }

  it('Should be render button title', () => {
    render(<Button {...defaultProps} />)
    expect(screen.getByText('Clique Aqui')).toBeInTheDocument()
  })

  it('Should be call onClick event', () => {
    render(<Button {...defaultProps} />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1)
  })

  it('Should be render disabled button', () => {
    render(<Button {...defaultProps} disabled={true} />)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

  it('Should be add class', () => {
    render(<Button {...defaultProps} />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('button')
  })

  it('Should be create snapshot', () => {
    const { container } = render(<Button {...defaultProps} />)

    expect(container).toMatchSnapshot()
  })
})
