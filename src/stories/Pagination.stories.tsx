import { Meta, StoryFn } from '@storybook/react'
import { Pagination } from '~/components'
import { PaginationProps } from '~/components/Pagination/types'

export default {
  title: 'Components/Pagination',
  component: Pagination
} as Meta

const Template: StoryFn<PaginationProps> = (args) => <Pagination {...args} />

export const Default = Template.bind({})
Default.args = {
  currentPage: 1,
  itemsPerPage: 5,
  totalItems: 100,
  onPageChange: (page) => console.log('Page changed to:', page)
}

export const LastPage = Template.bind({})
LastPage.args = {
  currentPage: 20,
  itemsPerPage: 5,
  totalItems: 100,
  onPageChange: (page) => console.log('Page changed to:', page)
}

export const FirstPage = Template.bind({})
FirstPage.args = {
  currentPage: 1,
  itemsPerPage: 5,
  totalItems: 100,
  onPageChange: (page) => console.log('Page changed to:', page)
}
