import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Content from '../components/Content';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

function Home() {
    const classes = useStyles();

    return (
      <div className={classes.root}>

        <Navbar />
        <Sidebar />
        <Content />
        <Footer />
      </div>
    );
}

export default Home;