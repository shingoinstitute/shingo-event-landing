import * as React from 'react';
import './App.css';

import { ThemeProvider } from './styled-components'
/*
import Cincinnati from './pages/Cincinnati'

const CincinnatiTheme = {
  color: '#db8e39',
  hover: '#fbae59'
}
*/
import NEStudyTour from './pages/NEStudyTour'

const NETheme = {
  color: '#2fa3f0',
  hover: '#3fb3ff'
}

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={NETheme}>
        <NEStudyTour/>
      </ThemeProvider>
      
    );
  }
}

export default App;
