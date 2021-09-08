import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import AboutContent from '../components/AboutContent';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

function About() {
    const classes = useStyles();

    return (
      <div className={classes.root}>

        <Navbar />
        <Sidebar />
        <AboutContent />
        <Footer />
      </div>
    );
}

export default About;