import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import TestWrapper from '../TestWrapper'
import { store } from '../../reducers/configureStore'

import App from '.'

describe('App Test', () => {
  test('Loads App', () => {
    const { container } = render(
      <Provider store={store}>
        <TestWrapper>
          <Router>
            <App />
          </Router>
        </TestWrapper>
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })
})
