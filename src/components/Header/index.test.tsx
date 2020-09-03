import React from 'react'
import { render } from '@testing-library/react'

import TestWrapper from '../TestWrapper'

import Header from '.'

describe('Header Test', () => {
  test('Loads Header', () => {
    const { container } = render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    )

    expect(container).toMatchSnapshot()
  })
})
