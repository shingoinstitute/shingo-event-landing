import * as React from 'react';
import './App.css';

import { ThemeProvider } from './styled-components'
// import ThemeInterface from './theme'

import Cincinnati from './pages/Cincinnati'

const CincinnatiTheme = {
  color: '#db8e39',
  hover: '#fbae59'
}


class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={CincinnatiTheme}>
        <Cincinnati/>
      </ThemeProvider>
      
    );
  }
}

export default App;
