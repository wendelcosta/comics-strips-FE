import React from 'react'

import Header from '.'
import TestWrapper from '../TestWrapper'

export default {
  title: 'Header',
  component: Header,
}

export const Default = (): any => (
  <TestWrapper>
    <Header />
  </TestWrapper>
)
