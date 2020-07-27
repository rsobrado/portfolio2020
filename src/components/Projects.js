import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'

import { makeStyles } from '@material-ui/core/styles'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  cardTitle: {
    position: 'absolute',
  },
  title: {
    color: 'white',
    position: 'absolute',
    zIndex: '-1',
    background: 'linear-gradient(123deg,#3978af 0,#2bbfc3 50%,#2898bb 100%)',
    padding: '15px 53px 6px 53px ',
    borderRadius: '15px 15px 0 0',
    textShadow: '1px 1px 2px rgba(0,0,0,0.22), 2px 2px 4px rgba(0,0,0,0.22)',
    maxWidth: 380,
    top: '-60px',
    boxShadow:
      '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
  },
}))

export default function Projects(props) {
  const classes = useStyles()
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(props.projects)
  }, [props])

  return (
    <React.Fragment>
      {projects &&
        projects.map((project, index) => (
          <Grid item xs={12} lg={4} key={index}>
            <Card elevation={24}>
              <CardActionArea>
                {/* <CardMedia image={project.thumb} title={project.name} /> */}
                <CardContent onClick={() => window.open(project.url, '_blank')}>
                  <img src={project.thumb} alt={project.name}></img>
                  <h4 className={classes.title}>
                    <a href={project.url} target="_new">
                      {project.name}
                    </a>
                  </h4>

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p">
                    {project.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {project.stack &&
                  project.stack.map((tech, index) => (
                    <span
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(117,211,241,1) 8%, rgba(77,171,201,1) 100%)',
                        margin: '0 5px  10px',
                        fontSize: 'small',
                        borderRadius: 4,
                        padding: '5px 10px',
                        boxShadow:
                          'inset 0 1px 3px rgba(0,0,0,0.12), inset  0 1px 2px rgba(0,0,0,0.24)',
                      }}
                      key={index}>
                      {tech.tech}
                    </span>
                  ))}
              </CardActions>
            </Card>
          </Grid>
        ))}
    </React.Fragment>
  )
}
