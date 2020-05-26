## Refs
Refs provide a way to access DOM nodes or React elements created in the render method.

#### When to Use Refs
There are a few good use cases for refs:
- Managing focus, text selection, or media playback.
- Triggering imperative animations.
- Integrating with third-party DOM libraries.


#### Creating Refs
Refs are created using React.createRef() and attached to React elements via the ref attribute. Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the component.
```
import React from 'react';

class RefsDemo extends React.Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }
    render(){
        return <input type = "text"  ref={this.myRef} />
    }
}
export default RefsDemo;
```

#### Accessing Refs

When a ref is passed to an element in render, a reference to the node becomes accessible at the current attribute of the ref.
```
 this.myRef.current.focus();
 ```

 ***RefsDemo.js***
 ```
 import React from 'react';

class RefsDemo extends React.Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }
    componentDidMount(){
        this.myRef.current.focus();
        console.log(this.myRef);
    }
    clickHandler = () =>{
        alert(`Hii the value entered is ${this.myRef.current.value}`);
    } 
    render(){
        return (
            <div>
                <input type = "text"  ref={this.myRef}/>
                <button onClick = {this.clickHandler}>click</button>
             </div>
        )
    }
}
export default RefsDemo;
```