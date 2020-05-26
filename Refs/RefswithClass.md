### Refs with class Component 

Adding a Ref to a Class Component


Parent Component - ***FocusInput.js***
```
import React from 'react';
import InputComp from './InputComp';

class FocusInput extends React.Component{
    
    constructor(props){
        super(props);
        this.componentRef = React.createRef();
    }

    clickHandler = () => {
        console.log(this.componentRef);
        this.componentRef.current.FocusInput();
    }

    render(){
        return(
            <div>
               <InputComp create ref = {this.componentRef} /> 
               <button onClick = {this.clickHandler}>FocusInput</button>
            </div>
        )
    }
}

export default FocusInput;
```
Child Component - ***InputComp***
```
import React from 'react';

class InputComp extends React.Component{

    constructor(props){
        super(props);
        this.myref = React.createRef(); 
    }
    FocusInput = () => {
        this.myref.current.focus();
    }
    render(){
        return(
            <div>
                <input type = "text" ref = {this.myref}/>
            </div>
        )
    }
}

export default InputComp;
```

