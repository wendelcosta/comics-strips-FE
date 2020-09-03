import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) =>
  createStyles({
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

const Details: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const { id } = useParams()
  const test = useSelector(
    // @ts-ignore
    (state) => state.comics.comics
  )
  const filteredComic = test.filter(
    (comic: any) => Number(comic.num) === Number(id)
  )

  useEffect(() => {
    // eslint-disable-next-line
    filteredComic.length === 0 && history.push('/')
  }, [filteredComic, history])

  return (
    <div className={classes.buttonWrapper}>
      <img src={filteredComic[0] && filteredComic[0].img} alt="" />
      <p>
        <strong>Number:</strong> {filteredComic[0] && filteredComic[0].num}
      </p>
      <p>
        <strong>Title:</strong> {filteredComic[0] && filteredComic[0].title}
      </p>
      <p>
        <strong>Date:</strong>{' '}
        {filteredComic[0] &&
          `${filteredComic[0].day}/${filteredComic[0].month}/${filteredComic[0].year}`}
      </p>
      <p>
        <strong>Transcript:</strong>{' '}
        {filteredComic[0] && filteredComic[0].transcript}
      </p>
      <Button onClick={(): void => history.push('/')} variant="contained">
        Back to strips
      </Button>
    </div>
  )
}

export default Details
