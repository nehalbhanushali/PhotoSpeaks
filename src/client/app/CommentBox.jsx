import React from 'react';
//import MobileTearSheet from '../../../MobileTearSheet';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
//import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';



const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);


class CommentList extends React.Component {

  render() {


    return (<ListItem
          
          
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>{this.props.commentbyname} </span> --
             {this.props.comment} 
            </p>
          }
          secondaryTextLines={2}
        />
        

   
  
);
  }
}

export default CommentList;