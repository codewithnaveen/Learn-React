### Passing Method as a props

Here exactly what we are trying to do is calling a method of parent component from child component and for this we are passing method as a props.

***ParentComponent.js***
```
import React from 'react';
import ChildComponent from '../components/ChildComponent';

class ParentComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            parentName: "Parent"
        }
        this.greetParent = this.greetParent.bind(this);
    }
    greetParent(childName){
        alert(`Components: ${this.state.parentName} and other component: ${childName}`);
    }
    render(){
        return(
            <>
            {this.state.parentName}
            <ChildComponent greetHandler = {this.greetParent}/>
            </>
        )
    }
}
export default ParentComponent;
``` 

***ChildComponent.js***
```
import React from 'react';

function ChildComponent(props){
    return(
        <div>
        <button onClick = {() => props.greetHandler("child")}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent;
```import React from 'react';

function ChildComponent(props){
    return(
        <div>
        <button onClick = {() => props.greetHandler("child")}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent;