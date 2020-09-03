import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../../styles/theme'

const TestWrapper: React.FC = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default TestWrapper
