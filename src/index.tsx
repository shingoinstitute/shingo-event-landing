import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';
import unregister from './registerServiceWorker'

import { ThemeProvider } from './styled-components'
import Cincinnati from './pages/Cincinnati'
import NEStudyTour from './pages/NEStudyTour'

const CincinnatiTheme = {
  color: '#db8e39',
  hover: '#fbae59'
}

const CincinnatiPage = () => (
  <ThemeProvider theme={CincinnatiTheme}>
    <Cincinnati/>
  </ThemeProvider>
)

const NETheme = {
  color: '#2fa3f0',
  hover: '#3fb3ff'
}

const NEPage = () => (
  <ThemeProvider theme={NETheme}>
    <NEStudyTour/>
  </ThemeProvider>
)

const Routing = (
  <Router>
    <div>
      <Route path="/northeast" component={NEPage}/>
      <Route path="/conference" component={CincinnatiPage}/>
    </div>
  </Router>
)

ReactDOM.render(
  Routing,
  document.getElementById('root') as HTMLElement
);
// registerServiceWorker();
unregister()
