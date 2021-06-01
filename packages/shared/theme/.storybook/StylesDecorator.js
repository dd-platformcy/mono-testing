import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/styles';
import PlatformTheme from '@platform/theme/platformTheme';

const StylesDecorator = storyFn => (
  <StylesProvider injectFirst>
    <CssBaseline />
    <MuiThemeProvider theme={PlatformTheme}>
      <div>HAHAHA</div>
      {storyFn()}
    </MuiThemeProvider>
  </StylesProvider>
);

export default StylesDecorator;
