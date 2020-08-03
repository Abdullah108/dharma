import React, { Component } from 'react';
import {Typography,Grid} from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import './index.css';
import Footer from './Footer/Footer';
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  
  form: {
    width: '7rem',
    background:'white',
    height:'40rem',
    marginTop:'3rem',
    borderRadius:'10px'
  },
  header: {
    fontSize:'25px',
    fontWeight:600,
    color:'#1b1f3b'
  },
  content: {
    fontWeight:600,
    color:'#1b1f3b'
  },
  Button: {
    color: 'white',
    width: '13rem',
    height: '3rem',
    padding: '9px',
    borderRadius: '25px',
    backgroundColor:'#1b1f3b'
  },
  
});

class ContactContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueEmail: false,
      valuePhone: false,
    };
  }
    onPhoneClicked = () => {
    this.setState({valuePhone: !this.state.valuePhone});
  }
    onEmailClicked = () => {
      this.setState({valueEmail: !this.state.valueEmail});
    }
  render() {
    const { classes } = this.props

    return (
      <React.Fragment>
        <div className="TextCenter Contact" id="contactBackground">
          <Grid container xs={12} align="center" >
            <Grid container xs={12}>
              <Grid item lg={7} xs={1}/>
              <Grid container  lg={4} xs={10} id="Form" style={{marginLeft:'2rem'}} className={classes.form}>
                <Grid container xs={12} style={{padding:'2rem'}}>
                  <Grid item xs={12} align='left'>
                    <Typography className={classes.header}>Send us a Message</Typography>
                  </Grid>
                  <Grid item xs={12} align="left">
                    <form className={classes.root} noValidate autoComplete="off">
                      <TextField  id="outlined-basic" fullWidth={true} label="Name"  />
                    </form>
                  </Grid>
                  <Grid item xs={12} align="left">
                    <form className={classes.root} noValidate autoComplete="off">
                      <TextField  id="outlined-basic" fullWidth={true} label="Email"  />
                    </form>
                  </Grid>
                  <Grid item xs={12} align="left">
                    <form className={classes.root} noValidate autoComplete="off">
                      <TextField  id="outlined-basic" fullWidth={true} label="Phone"  />
                    </form>
                  </Grid>
                  <Grid item xs={12} align="left">
                    <form className={classes.root} noValidate autoComplete="off">
                      <Typography className={classes.content}>Preffered method of communication</Typography>
                      <FormControl component="fieldset">
                        <RadioGroup aria-label="gender" name="gender1" value={this.state.value} onChange={()=>{this.onPhoneClicked();this.onEmailClicked()}}>
                          <FormControlLabel value="female" control={<Radio />} label="Female" />
                          <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                      </FormControl>
                    </form>
                  </Grid>
                  <Grid item xs={12} align="left">
                    <form className={classes.root} noValidate autoComplete="off">
                      <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={4}
                      />
                    </form>
                  </Grid>
                  <Grid item xs={12} id="submit" style={{alignSelf:"flex-end"}}>
                  <Button className={classes.Button} variant="contained"><span style={{color:'white'}}>Submit</span></Button>

                  </Grid>
                </Grid>
              </Grid>
              <Grid container lg={1} xs={1}/>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ContactContainer);
