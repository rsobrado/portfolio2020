import React, {  useState,useEffect  } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

import Projects from './Projects'
import Bio from './bio'
import data from './../data/projects.json'

const useStyles = makeStyles((theme) => ({
  
  projectsContainer: {
    padding: 100,
    width: '100%',
  },
  groupUl: {
    padding: 0,
    margin: 0,
  },
}))

export default function Dashboard() {
  const classes = useStyles()
  const [projects, setProjects] = useState(data)
  useEffect(() => {
    setProjects(data)
  }, [])

  return (
    <div>
      <Bio />
      <Grid container spacing={10} className={classes.projectsContainer}>
        <Projects projects={projects} />
      </Grid>
    </div>
  )
}
