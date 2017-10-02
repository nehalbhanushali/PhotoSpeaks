import React from 'react';
import Drawer from 'material-ui/Drawer';
//import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
//import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ImageCamera from 'material-ui/svg-icons/image/camera';
import ImagePhotoLibrary from 'material-ui/svg-icons/image/photo-library';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import PopCamera from './PopCameraIcon.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import LoginButton from './Login.jsx';
import ActionLabel from 'material-ui/svg-icons/action/label';
import {red500, green500, orange500} from 'material-ui/styles/colors';

import SelectField from 'material-ui/SelectField';



injectTapEventPlugin();



const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
    color: cyan500
  },
});


class UserAppBar extends React.Component {


constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      loggedIn: false,
      loginDialogOpen :false,
      username:"PhotoSpeaks"
     
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }
  

  handleToggle(){ this.setState({drawerOpen: !this.state.drawerOpen}); }

  handleClose() {this.setState({drawerOpen: false}); }
  handleLogout() {
    //console.log("bye");
  this.setState({loggedIn: false, 
                  username: "PhotoSpeaks"}); 
    //console.log("final in uab "+name);

    this.props.username("PhotoSpeaks");

    this.props.useravatar("");
    this.handleClose();
}

  handleLogin(log, name) {

    

    this.setState({loggedIn: log, 
                  username: name}); 
    //console.log("final in uab "+name);

    this.props.username(name);

    this.props.useravatar("https://lh6.googleusercontent.com/-NlRlqnnbQpY/AAAAAAAAAAI/AAAAAAAAAGc/QzyyYDQmQ1o/photo.jpg");

 

}

handlePost(url, tag){
  //console.log(url+" "+tag);

   this.props.post(url, tag); 

  

}

  render() {

  //title={ this.state.loggedIn ? { uname } : "PhotoSpeaks"}
    return(
  
<div>
<AppBar
    title={this.state.username}
    onLeftIconButtonTouchTap= {this.handleToggle}
  
    iconElementRight={ this.state.loggedIn ? <PopCamera post={this.handlePost}/> : <LoginButton loggedIn={this.handleLogin}
                                                                           
                                                               /> }
  />
 <Drawer docked={false} 
       open={this.state.drawerOpen}
onRequestChange={(drawerOpen) => this.setState({drawerOpen})}
       >
        <AppBar iconElementLeft ={<NavigationClose onTouchTap={this.handleClose} />} />
     
          <MenuItem leftIcon={<ActionLabel color={orange500} />}>{this.state.username}</MenuItem>
           <MenuItem onTouchTap={this.handleLogout}>{this.state.loggedIn ? "Logout" : " " }</MenuItem>
          
        </Drawer>
        </div>
);
}
}


export default UserAppBar;