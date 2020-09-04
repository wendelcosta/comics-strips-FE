import React from 'react'
import { render } from '@testing-library/react'

import TestWrapper from '../TestWrapper'

import Footer from '.'

describe('Footer Test', () => {
  test('Loads Footer', () => {
    const { container } = render(
      <TestWrapper>
        <Footer text="Copyright Wendel Costa" />
      </TestWrapper>
    )

    expect(container).toMatchSnapshot()
  })
})
