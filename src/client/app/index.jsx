import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {red300,red200,red100,pink300,pink400,pink500,indigo500, indigo700, grey900, grey800, grey700, grey100, indigo300, grey300, grey400, grey500,pinkA200,white, darkBlack, fullBlack, cyan500, green700} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

import Page from './Merge.jsx';

const muiTheme = getMuiTheme({
  spacing: {
    iconSize: 24,
    desktopGutter: 24,
    desktopGutterMore: 32,
    desktopGutterLess: 16,
    desktopGutterMini: 8,
    desktopKeylineIncrement: 64,
    desktopDropDownMenuItemHeight: 32,
    desktopDropDownMenuFontSize: 15,
    desktopDrawerMenuItemHeight: 48,
    desktopSubheaderHeight: 48,
    desktopToolbarHeight: 56,
  },
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: grey700,
    primary2Color: grey800,
    primary3Color: grey900,
    accent1Color: pink300,
    accent2Color: pink400,
    accent3Color: pink500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
});

const App = () => (


    <MuiThemeProvider muiTheme={muiTheme}>
   <Page />
  </MuiThemeProvider>
);
 
 
ReactDOM.render(
  <App />,
  document.getElementById('app')
);

