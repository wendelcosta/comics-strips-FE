import React from 'react'

import Footer from '.'
import TestWrapper from '../TestWrapper'

export default {
  title: 'Footer',
  component: Footer,
  argTypes: {
    text: { control: 'text' },
  },
}

export const Default = (args: Record<string, string>): any => (
  <TestWrapper>
    <Footer text={args.text} {...args} />
  </TestWrapper>
)
Default.args = {
  text: 'Copyright Wendel Costa',
}
