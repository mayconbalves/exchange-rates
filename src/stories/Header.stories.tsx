import type { Meta, StoryObj } from '@storybook/react'
import { Header } from '~/components'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    return <Header />
  }
}
