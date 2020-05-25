### Event Binding

#### binding in render method

Use bind keyword & bind the handler in the render method.
```
import React from 'react';

class EventBind extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message: "Helloworld!"
        }
    }
    clickHandler(){
        this.setState({
            message: "GoodBye"
        })
    }
        render(){
        return(
            <div>
                <h2>{this.state.message}</h2>
                <button onClick = {this.clickHandler.bind(this)}>click</button>
            </div>
        )
    }
}

export default EventBind;
```
---
#### Arrow Function in render method

```
import React from 'react';

class EventBind extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message: "Helloworld!"
        }
    }
    clickHandler(){
        this.setState({
            message: "GoodBye"
        })
    }
        render(){
        return(
            <div>
                <h2>{this.state.message}</h2>
                <button onClick = {() => this.clickHandler()}>click</button>
            </div>
        )
    }
}

export default EventBind;
```
#### Binding the event handelr in the constructor method
```
import React from 'react';

class EventBind extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message: "Helloworld!"
        }
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(){
        this.setState({
            message: "GoodBye"
        })
    }
        render(){
        return(
            <div>
                <h2>{this.state.message}</h2>
                <button onClick = {this.clickHandler}>click</button>
            </div>
        )
    }
}

export default EventBind;
```
#### Arrow Function
```
import React from 'react';

class EventBind extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message: "Helloworld!"
        }
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler = () => {
        this.setState({
            message: "GoodBye"
        })
    }
        render(){
        return(
            <div>
                <h2>{this.state.message}</h2>
                <button onClick = {this.clickHandler}>click</button>
            </div>
        )
    }
}

export default EventBind;
```
