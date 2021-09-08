import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    fontSize: 14,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  media: {
    height: 100,
  },

  root: {
    minWidth: 275,
    maxWidth: 345,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
  
 

}));

function AboutContent() {
  const classes = useStyles();

  return (
    <main className={classes.fullWidth}>
      <div className={classes.toolbar} />
      <div className={classes.title}>
        <Typography variant='h6'>  </Typography>
      </div>
      <div className={classes.content}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/src/images/logo512.png"
          title="React Training"
        />
       <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
               About
            </Typography>
            <Typography paragraph>
            Election Commission Of Sri Lanka <br></br>
            React BootCamp <br></br>
            Test Project
            </Typography>
        </CardContent>
        </CardActionArea>
            <CardActions>
                <Button size="small">Learn More</Button>
                <Button size="small" class="btn btn-info"  >read more</Button>
            </CardActions>
    </Card>
      </div>
    </main>
  );
}

export default AboutContent;