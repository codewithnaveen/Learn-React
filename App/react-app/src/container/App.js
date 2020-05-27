import React from 'react';

import './App.css';
import ParentComp from '../components/ParentComp';
import RefsDemo from '../components/RefsDemo';
import FocusInput from '../components/FocusInput';
import FRParent from '../components/FRParent';
import FormBasic from '../components/FormBasic';
import FormNew from '../components/FormNew';
import StyleSheet from '../components/Stylesheet';
import Inline from '../components/Inline';
import CssModule from '../components/CssModule';

function App() {
  return (
    <div className="App">
     <CssModule />
    </div>
  );
}

export default App;
