import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import ReactDOM  from 'react-dom';

import {ThemeProvider} from '@mui/material/styles'
import {theme} from './components/theme';

import { Headoc } from './components/Header';
function App() {
  return (

    <Headoc/>

  );
}

export default App;
