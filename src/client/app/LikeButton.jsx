import React from 'react';
import IconButton from 'material-ui/IconButton';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import {red500, green500, orange500} from 'material-ui/styles/colors';

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({liked: !this.state.liked});
  }
  render() {
    const text = this.state.liked ? 'like' : 'haven\'t liked';
    //const fillIcon = <FontIcon className="material-icons" color="#f00">palette</FontIcon>;
    return (
      <IconButton onClick={this.handleClick}>
      { this.state.liked ? <ActionFavorite color={red500}/> : <ActionFavoriteBorder color="#cecece"/> }  
      </IconButton>
    );
  }
}

export default LikeButton;