import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    footer: {
      padding: 10,
      backgroundColor: theme.custom.blue,
      color: theme.custom.white,
      textAlign: 'center',
    },
  })
)

const Footer: React.FC = () => {
  const classes = useStyles()
  const fullYear = new Date().getFullYear()
  return (
    <footer className={classes.footer}>
      <p>Copyright {fullYear} &copy; Wendel Costa</p>
    </footer>
  )
}

export default Footer
