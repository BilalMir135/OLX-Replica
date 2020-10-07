import React from 'react';
import Routes from './Routes';
import { ThemeProvider } from '@material-ui/core/styles';
import { Theme } from './Theme';

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={Theme}>
        <Routes />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
