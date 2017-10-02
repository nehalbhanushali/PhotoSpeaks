import React from 'react';
import Gallery from './data.jsx';
import TextField from 'material-ui/TextField';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import Chip from 'material-ui/Chip';
import {blue300, indigo900, white, black } from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
  
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};



/**
 * Examples of Chips, using an image [Avatar](/#/components/font-icon), [Font Icon](/#/components/font-icon) Avatar,
 * [SVG Icon](/#/components/svg-icon) Avatar, "Letter" (string) Avatar, and with custom colors.
 *
 * Chips with the `onRequestDelete` property defined will display a delete icon.
 */
class Tag extends React.Component {


   constructor(props) {
    super(props);
   // this.state = {likesCount : 0};

    this.state = {
      liked: false
      
    };


    this.handleTouchTap = this.handleTouchTap.bind(this);

  }



handleTouchTap(event) {
  
  this.props.similarHashTag(event.target.innerHTML);

}

  render() {
    return (
      <div >
      
        <Chip
          backgroundColor={black}
          labelColor={white}
          style={styles.chip}
           onTouchTap={this.handleTouchTap}
        >
         {this.props.hash}
         
        </Chip>

      
      </div>
    );
  }
}

export default Tag;