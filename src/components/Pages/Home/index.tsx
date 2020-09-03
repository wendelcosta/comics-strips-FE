import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'

import Card from '../../Card'

const useStyles = makeStyles((theme) =>
  createStyles({
    gridContainer: {
      marginBottom: 30,
    },
    loaderWrapper: {
      position: 'fixed',
      top: '50%',
      left: '50%',
    },
    buttonWrapper: {
      textAlign: 'center',
      '& button': {
        backgroundColor: theme.custom.blue,
        color: theme.custom.white,
        '&:hover': {
          backgroundColor: theme.custom.white,
          color: theme.custom.blue,
        },
      },
    },
  })
)

interface comicsData {
  num: number
  title: string
  month: string
  link: string
  year: string
  news: string

  transcript: string
  img: string
  day: string
  alt: string
}

interface HomeProps {
  comics: never[]
  onReloadClick?(): void
  isComicsLookUpPending?: boolean
}

const Home: React.FC<HomeProps> = ({
  comics,
  onReloadClick,
  isComicsLookUpPending,
}) => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <>
      <Grid className={classes.gridContainer} container spacing={3}>
        {!isComicsLookUpPending ? (
          comics.map((strip: comicsData) => (
            <Grid key={strip.num} item xs={12} sm={4}>
              <Card
                onClickCard={(): void => history.push(`/details/${strip.num}`)}
                img={strip.img}
              />
            </Grid>
          ))
        ) : (
          <div className={classes.loaderWrapper}>
            <CircularProgress />
          </div>
        )}
      </Grid>
      {!isComicsLookUpPending && (
        <div className={classes.buttonWrapper}>
          <Button onClick={onReloadClick} variant="contained">
            Reload
          </Button>
        </div>
      )}
    </>
  )
}

export default Home
