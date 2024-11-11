import { render } from '@testing-library/react'
import Loader from '.'

describe('Loader component', () => {
  it('should render the Loader component with the RotatingLines', () => {
    const { container } = render(<Loader />)

    const wrapper = container.querySelector('div')
    expect(wrapper).toBeInTheDocument()

    const rotatingLines = container.querySelector('svg')
    expect(rotatingLines).toBeInTheDocument()
    expect(rotatingLines).toHaveAttribute('stroke', '#001b74')
    expect(rotatingLines).toHaveAttribute('width', '96')

    expect(container).toMatchSnapshot()
  })
})
