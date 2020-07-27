import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import GitHubIcon from '@material-ui/icons/GitHub'
import MailIcon from '@material-ui/icons/Mail'

const useStyles = makeStyles((theme) => ({
  intro: {
    padding: '50px 80px 0',
    '& h1': {
      color: '#fff',
      fontSize: 90,
      textShadow:
        '0px 11px 15px  rgba(0,0,0,0.2), 0px 24px 38px  rgba(0,0,0,0.14), 0px 9px 46px  rgba(0,0,0,0.12)',
      letterSpacing: 2,
      transition: 'all ease-in-out 0.2s',
      fontWeight: 100,
    },
    '& h2': {
      color: '#fff',
      fontSize: 23,
      letterSpacing: '5px',
      opacity: '0.5',
      textShadow: '0 13px 33px rgba(0, 0, 0, .3)',
    },
    '& h3': {
      color: '#fff',
      fontSize: 34,
      letterSpacing: '7px',
    },
    // '&:hover': {
    //   '& > h1': {
    //     color: '#fff',
    //     fontSize: 90,
    //     letterSpacing: '25px',
    //     top: '10%',
    //     right: '42%',
    //     zIndex: 1,
    //   },
    //   '> bio': {
    //     opacity: 1,
    //   },
    // },
  },
  social: {
    opacity: '0.7',
  },
  bio: {
    position: 'fixed',
    zIndex: 9999,
    background: ' linear-gradient(67deg, rgba(2,32,70,1) 0%, transparent 69%)',
    padding: '90px 90px',
    width: 'fit-content',
    opacity: 0.6,
    right: '-15px',
    top: '30%',
    textAlign: 'right',
    borderRadius: '40px 0 0 40px',
    border: '15px solid rgba(3,38,75,0.2)',
    mixBlendMode: 'color-dodge',
    color: 'rgba(222,232,170,0.6)',
    boxShadow:
      '0px 10px 14px -6px rgba(55,155,255,0.12), 0px 22px 35px 3px rgba(25,75,155,0.11), 0px 8px 42px 7px rgba(55,255,255,0.08)',
  },
}))

export default function Bio() {
  const classes = useStyles()
  return (
    <div className={classes.intro}>
      {/* <Paper className={classes.bio} elevation={22}> */}
      <h1>Roger Sobrado</h1>
      <h2>FullStack | UI/UX Developer</h2>
      <div className={classes.social}>
        {' '}
        <a
          href="https://wa.me/50689171474"
          class="ws"
          rel="noopener noreferrer"
          target="_blank">
          <WhatsAppIcon />
          {'   '}
        </a>
        <a
          href="mailto:roger.sobrado.e@gmail.com"
          class="gm"
          rel="noopener noreferrer"
          target="_blank">
          <MailIcon />
          {'   '}
        </a>
        <a
          href="https://github.com/rsobrado"
          class="gh"
          rel="noopener noreferrer"
          target="_blank">
          <GitHubIcon />
          {'   '}
        </a>
        <a
          href="https://www.linkedin.com/in/rsobrado/"
          class="ln"
          rel="noopener noreferrer"
          target="_blank">
          <LinkedInIcon />
          {'   '}
        </a>
      </div>
      {/* <p>
          Full-stack Web and Mobile Developer with 10+ years of experience in
          the development track… Coding and analyzing graphic elements,
          enhancing the experience, researching, listening good music…
        </p> */}
      {/* </Paper> */}
    </div>
  )
}
