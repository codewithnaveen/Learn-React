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
