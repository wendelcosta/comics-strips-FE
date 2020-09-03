import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) =>
  createStyles({
    papers: {
      width: 250,
      height: 250,
      margin: '0 auto',
      '&:hover': {
        cursor: 'pointer ',
        boxShadow: `2px 5px 5px ${theme.custom.blue}`,
      },
    },
  })
)

interface CardProps {
  img: string
  onClickCard?(): void
}

const Card: React.FC<CardProps> = ({ onClickCard, img }) => {
  const classes = useStyles()
  return (
    <Paper className={classes.papers} onClick={onClickCard}>
      <img
        data-testid="card"
        src={img}
        alt="cards"
        className={classes.papers}
      />
    </Paper>
  )
}

export default Card
