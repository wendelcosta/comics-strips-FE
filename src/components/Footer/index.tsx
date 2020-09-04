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

interface FooterProps {
  text: string
}

const Footer: React.FC<FooterProps> = ({ text }) => {
  const classes = useStyles()
  const fullYear = new Date().getFullYear()
  return (
    <footer className={classes.footer}>
      <p>
        {' '}
        {fullYear} &copy; {text}
      </p>
    </footer>
  )
}

export default Footer
