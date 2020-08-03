import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import '../../../../App.css';
import PropTypes from 'prop-types';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import jQuery from 'jquery';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import SideDrawer from 'additionalResources/SideDrawer/SideDrawer';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
const useStyles = makeStyles(theme => ({
  root: {},
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  FAQs: {
    fontSize: '15px',
    marginTop: '0vh',
    opactiy: '0.8',
    color: '#8a93ad',
    fontWeight: '500'
  },
  GetStartedOnline: {
    borderRadius: '40px',
    background: 'white',
    border: '2px solid #f3f4f9',
    color: 'rgb(37, 48, 86)',
    width: '73px',
    height: '40px',
    fontSize: '14px',
    fontWeight: '600',
    paddingLeft: '10px',
    paddingRight: '10px',
    textTransform: 'none',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: 'rgb(37, 48, 86)',
      color: 'white'
    }
  },
  GetStartedOnlineMobile: {
    borderRadius: '40px',
    background: 'white',
    border: '2px solid #f3f4f9',
    color: 'rgb(37, 48, 86)',
    width: '100%',
    height: '40px',
    fontSize: '14px',
    fontWeight: '600',
    paddingLeft: '10px',
    paddingRight: '10px',
    textTransform: 'none',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: 'rgb(37, 48, 86)',
      color: 'white'
    }
  },
  SmartWallet: {
    color: 'rgb(37, 48, 86)',
    fontSize: '15px',
    fontWeight: '600'
  },
  wrapper: {
    overflowX: 'hidden'
  },
  wrapperContainer: {
    marginTop: '1rem'
  },
  headerContainer: {
    alignSelf: 'center',
    marginTop: '1rem'
  },
  header: {
    fontSize: '20px',
    fontWeight: '600'
  },
  closeIcon: {
    alignSelf: 'center',
    textAlign: 'right',
    paddingRight: '1rem'
  },
  contentContainer: {
    marginTop: '1rem'
  },
  contentWrapper: {
    paddingLeft: '1rem'
  },
  subHeading: {
    lineHeight: 1.5,
    fontSize: '24px',
    color: '#000646'
  },
  midSpan: {
    color: '#6062FF'
  },
  contentSubWrapper: {
    padding: '15px',
    paddingTop: '20px'
  },
  subHeader: {
    fontSize: '20px',
    lineHeight: '27px',
    color: '#000646',
    fontWeight: 700
  },
  downArrorw: {
    width: '8.4rem'
  },
  content1: {
    display: 'none',
    paddingTop: '.5rem'
  },
  innerContainer: {
    backgroundColor: '#f4f8fd'
  },
  subContent: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#000646'
  },
  subContent1: {
    fontSize: '14px',
    fontWeight: '400',
    color: '#000646'
  },
  subContentWrapper: {
    backgroundColor: '#f4f8fd',
    marginTop: '.5rem',
    paddingTop: '.5rem'
  },
  contentHeader: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#000646'
  },
  contentSubContent: {
    fontSize: '14px',
    fontWeight: '400',
    color: '#000646'
  },
  paddingContainer: {
    paddingBottom: '1rem'
  },
  hiddenContainer: {
    display: 'none',
    paddingTop: '.5rem'
  },
  hiddenHeader: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#000646',
    lineHeight: '24px',
    paddingTop: '.5rem',
    paddingBottom: '.5rem'
  },
  subHeadingContainer: {
    backgroundColor: '#f4f8fd',
    marginTop: '.5rem'
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;
  const mouse = event => {
    var colorhex = ['#253056'];
    var el = document.getElementById('colorstext');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout = event => {
    var white = '#6e7898';
    var el = document.getElementById('colorstext');
    el.style.color = white;
  };
  const mouse1 = event => {
    var colorhex = ['#253056'];
    var el = document.getElementById('colorstext1');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout1 = event => {
    var white = '#6e7898';
    var el = document.getElementById('colorstext1');
    el.style.color = white;
  };

  const mouse2 = event => {
    var colorhex = ['#253056'];
    var el = document.getElementById('colorstext2');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout2 = event => {
    var white = '#6e7898';
    var el = document.getElementById('colorstext2');
    el.style.color = white;
  };

  const mouse3 = event => {
    var colorhex = ['#253056'];
    var el = document.getElementById('colorstext3');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout3 = event => {
    var white = '#253056';
    var el = document.getElementById('colorstext3');
    el.style.color = white;
  };
  const classes = useStyles();
  /*=====DROPDOWN=====*/
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const handleClick1 = event => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  /*======TOPBAR=====*/
  const [value, setValue] = React.useState(0);

  const [state, setState] = React.useState({
    top: false
  });
  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  jQuery(document).ready(function() {
    jQuery('#hideshow1').on('click', function(event) {
      jQuery('#content1').toggle('hide');
    });
  });
  jQuery(document).ready(function() {
    jQuery('#hideshow2').on('click', function(event) {
      jQuery('#content2').toggle('hide');
    });
  });
  jQuery(document).ready(function() {
    jQuery('#hideshow3').on('click', function(event) {
      jQuery('#content3').toggle('hide');
    });
  });
  jQuery(document).ready(function() {
    jQuery('#hideshow4').on('click', function(event) {
      jQuery('#content4').toggle('hide');
    });
  });
  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom'
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <div id="header">
        <Grid container xs={12} className={classes.wrapper} align="center">
          <Grid
            container
            xs={12}
            className={classes.wrapperContainer}
            style={{ position: '' }}>
            <Grid item xs={3}>
              <img width="50px" src={require('../../../../assets/logo.png')} />
            </Grid>
            <Grid item xs={5} className={classes.headerContainer} align="left">
              <p className={classes.header}>PayKart</p>
            </Grid>
            <Grid
              item
              xs={4}
              className={classes.closeIcon}
              onClick={toggleDrawer(anchor, false)}>
              <CloseIcon style={{ fontSize: '30px' }} />
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            className={classes.contentContainer}
            align="left">
            <Grid
              item
              xs={12}
              className={classes.contentWrapper}
              style={{ fontWeight: 700 }}>
              <p className={classes.subHeading}>
                Changing the face of in-
                <br />
                store payments.
                <span className={classes.midSpan}>{' Done'}</span>
              </p>
            </Grid>
          </Grid>
          <Grid container xs={12} className={classes.contentSubWrapper}>
            <Grid container xs={12} style={{ paddingBottom: '1.8rem' }}>
              <Grid item xs={6} align="left">
                <p className={classes.subHeader}>For Retailers</p>
              </Grid>
              <Grid item xs={3} />
              <Grid item xs={3} align="right">
                <Button
                  id="hideshow1"
                  className={classes.downArrorw}
                  value="hide/show">
                  <ExpandMoreIcon />
                </Button>
              </Grid>
              <Grid
                container
                xs={12}
                id="content1"
                className={classes.content1}>
                <Grid
                  container
                  xs={12}
                  style={{ backgroundColor: '#f4f8fd', height: '3rem' }}>
                  <Grid item xs={2} dtyle={{ alignSelf: 'center' }}>
                    <img src="https://seedlegals.com/wp-content/uploads/2019/12/start-icon.svg" />
                  </Grid>
                  <Grid
                    item
                    xs={10}
                    align="left"
                    style={{ paddingTop: '.5rem' }}>
                    <p className={classes.subContent}>Inevitable</p>
                    <p className={classes.subContent1}>
                      Transform consumer journeys
                    </p>
                  </Grid>
                </Grid>
                <Grid
                  container
                  xs={12}
                  className={classes.subContentWrapper}
                  style={{ paddingBottom: '.5rem' }}>
                  <Grid item xs={2} dtyle={{ alignSelf: 'center' }}>
                    <img src="https://seedlegals.com/wp-content/uploads/2019/12/start-icon.svg" />
                  </Grid>
                  <Grid item xs={10} align="left">
                    <p className={classes.contentHeader}>Products</p>
                    <p className={classes.contentSubContent}>
                      Supercharge your retail operations
                    </p>
                  </Grid>
                </Grid>
                <Grid
                  container
                  xs={12}
                  className={classes.subContentWrapper}
                  style={{ paddingBottom: '.5rem' }}>
                  <Grid item xs={2} dtyle={{ alignSelf: 'center' }}>
                    <img src="https://seedlegals.com/wp-content/uploads/2019/12/start-icon.svg" />
                  </Grid>
                  <Grid item xs={10} align="left">
                    <p className={classes.contentHeader}>Onboarding</p>
                    <p className={classes.contentSubContent}>
                      Tailored support from the ground up
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container xs={12} style={{ paddingBottom: '1.8rem' }}>
              <Grid item xs={6} align="left">
                <p className={classes.subHeader}>For Users</p>
              </Grid>
              <Grid item xs={3} />
              <Grid item xs={3} align="right" style={{ paddingLeft: '2.1rem' }}>
                <Button
                  id="hideshow2"
                  className={classes.downArrow}
                  value="hide/show">
                  <ExpandMoreIcon />
                </Button>
              </Grid>
              <Grid
                container
                xs={12}
                id="content2"
                className={classes.hiddenContainer}>
                <Grid container xs={12} style={{ backgroundColor: '#f4f8fd' }}>
                  <Grid item xs={1} />
                  <Grid item xs={10} align="left">
                    <p className={classes.hiddenHeader}>Angel Investors</p>
                  </Grid>
                  <Grid item xs={1} style={{ alignSelf: 'center' }}>
                    <ChevronRightIcon />
                  </Grid>
                </Grid>
                <Grid container xs={12} className={classes.subHeadingContainer}>
                  <Grid item xs={1} />
                  <Grid item xs={10} align="left">
                    <p className={classes.hiddenHeader}>VCs & Funds</p>
                  </Grid>
                  <Grid item xs={1} style={{ alignSelf: 'center' }}>
                    <ChevronRightIcon />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container xs={12} style={{ paddingBottom: '1.8rem' }}>
              <Grid item xs={6} align="left">
                <p className={classes.subHeader}>Pricing</p>
              </Grid>
              <Grid item xs={3} />
              <Grid item xs={3} align="right"></Grid>
            </Grid>
            <Grid container xs={12} style={{ paddingBottom: '1.8rem' }}>
              <Grid item xs={6} align="left">
                <p className={classes.subHeader}>Resources</p>
              </Grid>
              <Grid item xs={3} />
              <Grid
                item
                xs={3}
                align="right"
                style={{ paddingRight: '2.1rem' }}>
                <Button
                  id="hideshow3"
                  style={{ width: '8.4rem' }}
                  value="hide/show">
                  <ExpandMoreIcon />
                </Button>
              </Grid>
              <Grid
                container
                xs={12}
                id="content3"
                style={{ display: 'none', paddingTop: '.5rem' }}>
                <Grid container xs={12} style={{ backgroundColor: '#f4f8fd' }}>
                  <Grid item xs={1} />
                  <Grid item xs={10} align="left">
                    <p
                      style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#000646',
                        lineHeight: '24px',
                        paddingTop: '.5rem',
                        paddingBottom: '.5rem'
                      }}>
                      Startup Guides
                    </p>
                  </Grid>
                  <Grid item xs={1} style={{ alignSelf: 'center' }}>
                    <ChevronRightIcon />
                  </Grid>
                </Grid>
                <Grid
                  container
                  xs={12}
                  style={{ backgroundColor: '#f4f8fd', marginTop: '.5rem' }}>
                  <Grid item xs={1} />
                  <Grid item xs={10} align="left">
                    <p
                      style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#000646',
                        lineHeight: '24px',
                        paddingTop: '.5rem',
                        paddingBottom: '.5rem'
                      }}>
                      Funding Guides
                    </p>
                  </Grid>
                  <Grid item xs={1} style={{ alignSelf: 'center' }}>
                    <ChevronRightIcon />
                  </Grid>
                </Grid>
                <Grid
                  container
                  xs={12}
                  style={{ backgroundColor: '#f4f8fd', marginTop: '.5rem' }}>
                  <Grid item xs={1} />
                  <Grid item xs={10} align="left">
                    <p
                      style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#000646',
                        lineHeight: '24px',
                        paddingTop: '.5rem',
                        paddingBottom: '.5rem'
                      }}>
                      Finding Investors
                    </p>
                  </Grid>
                  <Grid item xs={1} style={{ alignSelf: 'center' }}>
                    <ChevronRightIcon />
                  </Grid>
                </Grid>
                <Grid
                  container
                  xs={12}
                  style={{ backgroundColor: '#f4f8fd', marginTop: '.5rem' }}>
                  <Grid item xs={1} />
                  <Grid item xs={10} align="left">
                    <p
                      style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#000646',
                        lineHeight: '24px',
                        paddingTop: '.5rem',
                        paddingBottom: '.5rem'
                      }}>
                      Founder Stories
                    </p>
                  </Grid>
                  <Grid item xs={1} style={{ alignSelf: 'center' }}>
                    <ChevronRightIcon />
                  </Grid>
                </Grid>
                <Grid
                  container
                  xs={12}
                  style={{ backgroundColor: '#f4f8fd', marginTop: '.5rem' }}>
                  <Grid item xs={1} />
                  <Grid item xs={10} align="left">
                    <p
                      style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#000646',
                        lineHeight: '24px',
                        paddingTop: '.5rem',
                        paddingBottom: '.5rem'
                      }}>
                      Data
                    </p>
                  </Grid>
                  <Grid item xs={1} style={{ alignSelf: 'center' }}>
                    <ChevronRightIcon />
                  </Grid>
                </Grid>
                <Grid
                  container
                  xs={12}
                  style={{ backgroundColor: '#f4f8fd', marginTop: '.5rem' }}>
                  <Grid item xs={1} />
                  <Grid item xs={10} align="left">
                    <p
                      style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#000646',
                        lineHeight: '24px',
                        paddingTop: '.5rem',
                        paddingBottom: '.5rem'
                      }}>
                      Events
                    </p>
                  </Grid>
                  <Grid item xs={1} style={{ alignSelf: 'center' }}>
                    <ChevronRightIcon />
                  </Grid>
                </Grid>
                <Grid
                  container
                  xs={12}
                  style={{ backgroundColor: '#f4f8fd', marginTop: '.5rem' }}>
                  <Grid item xs={1} />
                  <Grid item xs={10} align="left">
                    <p
                      style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#000646',
                        lineHeight: '24px',
                        paddingTop: '.5rem',
                        paddingBottom: '.5rem'
                      }}>
                      (S)EIS
                    </p>
                  </Grid>
                  <Grid item xs={1} style={{ alignSelf: 'center' }}>
                    <ChevronRightIcon />
                  </Grid>
                </Grid>
                <Grid
                  container
                  xs={12}
                  style={{ backgroundColor: '#f4f8fd', marginTop: '.5rem' }}>
                  <Grid item xs={1} />
                  <Grid item xs={10} align="left">
                    <p
                      style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#000646',
                        lineHeight: '24px',
                        paddingTop: '.5rem',
                        paddingBottom: '.5rem'
                      }}>
                      Investor Hub
                    </p>
                  </Grid>
                  <Grid item xs={1} style={{ alignSelf: 'center' }}>
                    <ChevronRightIcon />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container xs={12} style={{ paddingBottom: '1rem' }}>
              <Grid item xs={6} align="left">
                <p
                  style={{
                    fontSize: '20px',
                    lineHeight: '27px',
                    color: '#000646',
                    fontWeight: 700
                  }}>
                  Company
                </p>
              </Grid>
              <Grid item xs={3} />
              <Grid item xs={3} align="right">
                <Button
                  id="hideshow4"
                  style={{ width: '8.4rem' }}
                  value="hide/show">
                  <ExpandMoreIcon />
                </Button>
              </Grid>
              <Grid
                container
                xs={12}
                id="content4"
                style={{ display: 'none', paddingTop: '.5rem' }}>
                <Grid container xs={12} style={{ backgroundColor: '#f4f8fd' }}>
                  <Grid item xs={1} />
                  <Grid item xs={10} align="left">
                    <p
                      style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#000646',
                        lineHeight: '24px',
                        paddingTop: '.5rem',
                        paddingBottom: '.5rem'
                      }}>
                      About
                    </p>
                  </Grid>
                  <Grid item xs={1} style={{ alignSelf: 'center' }}>
                    <ChevronRightIcon />
                  </Grid>
                </Grid>
                <Grid
                  container
                  xs={12}
                  style={{ backgroundColor: '#f4f8fd', marginTop: '.5rem' }}>
                  <Grid item xs={1} />
                  <Grid item xs={10} align="left">
                    <p
                      style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#000646',
                        lineHeight: '24px',
                        paddingTop: '.5rem',
                        paddingBottom: '.5rem'
                      }}>
                      Customers
                    </p>
                  </Grid>
                  <Grid item xs={1} style={{ alignSelf: 'center' }}>
                    <ChevronRightIcon />
                  </Grid>
                </Grid>
                <Grid
                  container
                  xs={12}
                  style={{ backgroundColor: '#f4f8fd', marginTop: '.5rem' }}>
                  <Grid item xs={1} />
                  <Grid item xs={10} align="left">
                    <p
                      style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#000646',
                        lineHeight: '24px',
                        paddingTop: '.5rem',
                        paddingBottom: '.5rem'
                      }}>
                      Careers
                    </p>
                  </Grid>
                  <Grid item xs={1} style={{ alignSelf: 'center' }}>
                    <ChevronRightIcon />
                  </Grid>
                </Grid>
                <Grid
                  container
                  xs={12}
                  style={{ backgroundColor: '#f4f8fd', marginTop: '.5rem' }}>
                  <Grid item xs={1} />
                  <Grid item xs={10} align="left">
                    <p
                      style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#000646',
                        lineHeight: '24px',
                        paddingTop: '.5rem',
                        paddingBottom: '.5rem'
                      }}>
                      Contact
                    </p>
                  </Grid>
                  <Grid item xs={1} style={{ alignSelf: 'center' }}>
                    <ChevronRightIcon />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid container xs={12}>
              <Grid item xs={12} style={{ marginTop: '2rem' }}>
                <Button
                  style={{
                    width: '18rem',
                    borderRadius: '25px',
                    backgroundColor: '#6062FF'
                  }}>
                  <p
                    style={{
                      fontSize: '18px',
                      lineHeight: '20px',
                      color: 'white',
                      marginTop: '.7rem',
                      marginBottom: '.7rem'
                    }}>
                    Start Free
                  </p>
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              xs={12}
              align="center"
              style={{ justifyContent: 'center', marginTop: '2rem' }}>
              <p style={{ fontSize: '18px', fontWeight: '600' }}>
                Already have an account?{' '}
                <span style={{ fontWeight: '600', color: '#6062FF' }}>
                  log in
                </span>
              </p>
            </Grid>
            <Grid
              container
              xs={12}
              justify="space-evenly"
              style={{ padding: '0 30px' }}>
              <Grid item>
                <div style={{ alignSelf: 'center' }}>
                  <FacebookIcon
                    style={{ color: '#6062FF', fontSize: '35px' }}
                  />
                </div>
              </Grid>
              <Grid item style={{ alignSelf: 'center' }}>
                <InstagramIcon style={{ color: '#6062FF', fontSize: '35px' }} />
              </Grid>
              <Grid item style={{ alignSelf: 'center' }}>
                <LinkedInIcon style={{ color: '#6062FF', fontSize: '38px' }} />
              </Grid>
              <Grid item style={{ alignSelf: 'center' }}>
                <div
                  style={{
                    background: '#6062FF',
                    padding: '2px',
                    borderRadius: '4px'
                  }}>
                  <TwitterIcon style={{ color: 'white', fontSize: '25px' }} />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
  return (
    <div className="NavbarSideDrawerWrapper">
      <div
        className={classes.root}
        // style={{ background: "rgba(255, 255, 255, 0.9)", position: "absolute", top: 0, left: 0, right: 0, zIndex: 2, boxShadow: "5px 4px 8px 5px white" }}
      >
        <Grid
          container
          sm={12}
          md={12}
          lg={12}
          style={{ backgroundColor: 'white', zIndex: '30' }}>
          <div class="cssanimation sequence fadeInBottom" id="topbarAnim">
            <Grid
              container
              align="center"
              justify="space-between"
              id="desktop"
              sm={12}
              md={12}
              lg={12}
              style={{ zIndex: '300000', paddingTop: '5vh' }}>
              <Grid
                item
                sm={2}
                md={2}
                lg={2}
                align="center"
                style={{ marginTop: '3vh', paddingRight: '10vh' }}>
                <img width="60" src={require('../../../../assets/logo.png')} />
              </Grid>
              <Grid
                container
                sm={6}
                lg={3}
                md={4}
                style={{
                  marginTop: '4vh',
                  paddingRight: '8vh'
                }}>
                <Grid item md={2} sm={2} lg={2}>
                  <IconButton>
                    <Link to="/support">
                      <Typography
                        className={classes.FAQs}
                        onMouseEnter={mouse}
                        onMouseLeave={mouseout}
                        id="colorstext">
                        {' '}
                        FAQs
                      </Typography>
                    </Link>
                  </IconButton>
                </Grid>
                <Grid item md={4} sm={4} lg={4}>
                  <IconButton>
                    <Link to="/users">
                      <Typography
                        className={classes.FAQs}
                        onMouseEnter={mouse1}
                        onMouseLeave={mouseout1}
                        id="colorstext1">
                        {' '}
                        Users
                      </Typography>
                    </Link>
                  </IconButton>
                </Grid>
                <Grid item md={4} sm={4} lg={4}>
                  <IconButton>
                    <Link to="/retailers">
                      <Typography
                        className={classes.FAQs}
                        onMouseEnter={mouse2}
                        onMouseLeave={mouseout2}
                        id="colorstext2">
                        Retailers
                      </Typography>
                    </Link>
                  </IconButton>
                </Grid>
                <Grid item md={2} sm={2} lg={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.GetStartedOnline}>
                    Log In
                  </Button>
                  <Typography>{'  '}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <Grid
            container
            align="center"
            justify="space-between"
            id="Mobile"
            sm={12}
            md={12}
            lg={12}
            style={{ zIndex: '3' }}>
            <Grid
              item
              xs={2}
              align="left"
              style={{
                marginTop: '3vh',
                marginBottom: '3vh',
                paddingLeft: '3vh'
              }}>
              <img width="60" src={require('../../../../assets/logo.png')} />
            </Grid>
            <Grid
              container
              align="center"
              xs={6}
              justify="space-between"
              style={{ paddingTop: '4vh', paddingRight: '3vh' }}>
              <Grid className="HideSm" item md={2} sm={2} lg={2} xs={5}>
                <IconButton>
                  <Link to="/support">
                    <Typography className={classes.FAQs}> FAQs</Typography>
                  </Link>
                </IconButton>
              </Grid>
              <Grid className="HideSm" item md={2} sm={2} lg={2} xs={7}>
                <Link to="/login">
                  <Button
                    variant="contained"
                    className={classes.GetStartedOnlineMobile}>
                    Log In
                  </Button>
                </Link>
                <Typography>{'  '}</Typography>
              </Grid>
              <div>
                {['top'].map(anchor => (
                  <React.Fragment key={anchor}>
                    <Button
                      onClick={toggleDrawer(anchor, true)}
                      style={{
                        position: 'absolute',
                        left: '80%',
                        top: '5%',
                        outline: 'none',
                        opacity: '0'
                      }}>
                      {anchor}
                    </Button>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}>
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </div>
              <div
                className="Hamburger"
                style={{ marginLeft: 'auto', textAlign: 'left' }}
                id="Hamburger">
                <MenuIcon style={{ fontSize: '2.3rem', color: 'black' }} />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
