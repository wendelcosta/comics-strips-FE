import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'

import Card from '.'
import TestWrapper from '../TestWrapper'

describe('Card Test', () => {
  test('Loads Card', () => {
    const myMock = jest.fn()
    const { container } = render(
      <TestWrapper>
        <Card img="test" onClickCard={myMock} />
      </TestWrapper>
    )
    const card = screen.getByTestId('card')
    fireEvent.click(card)
    expect(myMock).toHaveBeenCalled()
    expect(container).toMatchSnapshot()
  })
})
