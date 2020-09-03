import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { Switch, Route } from 'react-router-dom'

import Container from '@material-ui/core/Container'

import Header from '../Header'
import Footer from '../Footer'
import Home from '../Pages/Home'
import Details from '../Pages/Details'
import ScrollToTop from '../ScrollToTop'

import theme from '../../styles/theme'

import { fetchComics } from '../../actions/comics'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const [shouldFetch, setShouldFetch] = useState(true)
  useEffect(() => {
    // eslint-disable-next-line
    shouldFetch && dispatch(fetchComics())
    setShouldFetch(false)
  }, [dispatch, shouldFetch])

  const comics = useSelector(
    // @ts-ignore
    (state) => state.comics.comics
  )
  const isComicsLookUpPending = useSelector(
    // @ts-ignore
    (state) => state.comics.isComicsLookUpPending
  )

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ScrollToTop />
        <Header />
        <Container
          style={{ minHeight: '100%', marginBottom: 30 }}
          maxWidth="lg"
        >
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <Home
                isComicsLookUpPending={isComicsLookUpPending}
                comics={comics}
                onReloadClick={(): any => (
                  // eslint-disable-next-line
                  setShouldFetch(true), dispatch(fetchComics())
                )}
              />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
