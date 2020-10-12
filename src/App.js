import React,{Suspense} from 'react';
import Routes from './Routes';
import { ThemeProvider } from '@material-ui/core/styles';
import { Theme } from './Theme';
import Loader from './components/Loader';

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={Theme}>
        <Suspense fallback={<Loader/>}>
          <Routes />
        </Suspense>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
