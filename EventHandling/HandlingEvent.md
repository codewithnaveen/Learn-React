### Handling Events

Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:

- React events are named using camelCase, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.



***FunctionClick.js***
```
import React from 'react';

function FunctionClick(){
    function clickHandler(){
        console.log("Button clicked");
    }
    return(
        <div>
            <button onClick = {clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick;
```
***App.js***
```
import React from 'react';
import './App.css';
import FunctionClick from '../components/eventhandling/FunctionClick';

function App() {
  return (
    <React.Fragment>
      <FunctionClick />
    </React.Fragment> 
  
  );
}

export default App;
```

---

***ClassClick.js***
```
import React from 'react';

class ClassClick extends React.Component{

    clickHandler(){
        console.log("Button Clicked")
    }
    render(){
        return(
            <div>
            <button onClick = {this.clickHandler}>Click me</button>
        </div>
        )
    }
    
}


export default ClassClick
```
***App.js***
```
import React from 'react';
import './App.css';
import ClassClick from '../components/eventhandling/ClassClick';

function App() {
  return (
    <React.Fragment>
      <ClassClick />
    </React.Fragment> 
  
  );
}

export default App;
```
