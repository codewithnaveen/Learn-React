import React from 'react';

import './App.css';
import ParentComp from '../components/ParentComp';
import RefsDemo from '../components/RefsDemo';
import FocusInput from '../components/FocusInput';
import FRParent from '../components/FRParent';

function App() {
  return (
    <div className="App">
     <FRParent />
    </div>
  );
}

export default App;
