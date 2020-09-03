import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    header: {
      textAlign: 'center',
      backgroundColor: theme.custom.blue,
      color: theme.custom.white,
      '& h1': {
        marginTop: 0,
        padding: 10,
      },
    },
  })
)

const Header: React.FC = () => {
  const classes = useStyles()
  return (
    <header className={classes.header}>
      <h1>Comics xkcd - Brought to you by Wendel Costa</h1>
    </header>
  )
}

export default Header
