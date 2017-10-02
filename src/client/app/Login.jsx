

import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import {white} from 'material-ui/styles/colors';
const labelStyle = {
  color: white,

};

 class LoginButtton extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loginDialogOpen :false,
       isloggedIn:false,
       uname:'Rydham',
       pswd:'sdfsdf'
    };

    this.handleLoginDialogOpen = this.handleLoginDialogOpen.bind(this);
    this.handleLoginDialogClose = this.handleLoginDialogClose.bind(this);
    this.handleCloseAndLogin = this.handleCloseAndLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleLoginDialogOpen(){ 

    this.setState({loginDialogOpen: true}); }

  handleLoginDialogClose(){ this.setState({loginDialogOpen: false}); }

  handleCloseAndLogin(){ 
    this.setState({
      loginDialogOpen: false,
       isloggedIn:true
    }); 
 var logState = this.state.isloggedIn;
 var userName = this.state.uname;

   this.props.loggedIn(true, userName); 
  }
  handleChange(event){
    this.setState({uname: event.target.value});
  }

  render() {

 const actions = [
      <FlatButton
        label="Login"
        primary={true}
        onTouchTap={this.handleCloseAndLogin}

      />,
      
    ];

    var errorElem = <h2> why !</h2>;

    return (
     <div> <FlatButton style={labelStyle} label="Login" onTouchTap={this.handleLoginDialogOpen}/> 
        <Dialog
          title="Login to PhotoSpeaks"
          actions={actions}
          modal={false}
          open={this.state.loginDialogOpen}
          onRequestClose={this.handleLoginDialogClose}
        >
           <div>
    <TextField
      hintText="Enter your Username"
      onChange = {this.handleChange}
      value={this.state.uname}
      floatingLabelText="Username"
    /><br />
    <br />
    <TextField
      hintText="Enter your Password"
      floatingLabelText="Password"
      type="password"
    /><br /></div>
        </Dialog>

 </div>
    );
  }
}

export default LoginButtton;