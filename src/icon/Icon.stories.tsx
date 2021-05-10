import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { IconButton } from './Icon'
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant'

export default {
  title: 'Example/icon/IconButton',
  component: IconButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story = (args) => (
  <IconButton {...args}>
    <NotificationImportantIcon />
  </IconButton>
)

export const Default = Template.bind({})
Default.args = {
  logo: '/logo/relance.png',
}
