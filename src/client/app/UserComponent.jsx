import React from 'react';

import UserAppBar from './UserAppBar.jsx';



class User extends React.Component {

constructor(props){
        super(props);
        this.state = {
          username : '',
          useravatar:''
           /*data : [
            {user_avatar:"https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAATWAAAAJDg2ZWE1NGU5LTcyZjQtNGRiOC1iN2YyLTU0ZTE3Y2EwYjVkYg.jpg",
            user_name:"Nehal Bhanushali"
            }]*/

        }
        this.handleUserName = this.handleUserName.bind(this);
         this.handleUserAvatar = this.handleUserAvatar.bind(this);
          this.handlePost = this.handlePost.bind(this);
    }

  handleUserName(name) {
    this.setState({username: name}); 
    //console.log("final before"+name);
    this.props.username(name); // avatar later
  }

  handleUserAvatar(avatar) {
    this.setState({useravatar: avatar}); 
  }

  handlePost(url, tag){
  //ßconsole.log(url+" << >> "+tag);

   this.props.post(url, tag); 

}

render(){
var user_header = <div><UserAppBar post ={this.handlePost} username={this.handleUserName} useravatar={this.handleUserAvatar} /></div>;
return(
  <div>{user_header}  
  </div>
);}

  }

  export default User;
