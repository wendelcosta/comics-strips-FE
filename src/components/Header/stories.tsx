import React from 'react'

import Header from '.'
import TestWrapper from '../TestWrapper'

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    text: { control: 'text' },
  },
}

export const Default = (args: Record<string, string>): any => (
  <TestWrapper>
    <Header text={args.text} {...args} />
  </TestWrapper>
)
Default.args = {
  text: 'Comics xkcd - Brought to you by Wendel Costa',
}
