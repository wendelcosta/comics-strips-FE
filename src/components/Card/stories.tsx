import React from 'react'

import Card from '.'
import TestWrapper from '../TestWrapper'

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    img: { control: 'text' },
  },
}

export const Default = (args: Record<string, string>): any => (
  <TestWrapper>
    <Card img={args.img} {...args} />
  </TestWrapper>
)
Default.args = {
  img: 'https://imgs.xkcd.com/comics/stellar_evolution.png',
}
