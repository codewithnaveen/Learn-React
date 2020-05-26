import React from 'react';

class FormBasic extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name : 'naveen',
            email :'naveen@abc.com'
        }
    }

    unameChangeHandler = (event) => {
        console.log(event);
        this.setState({
            name: event.target.value
        })
    }
    emailChangeHandler = (event) => {
        console.log(event);
        this.setState({
            email: event.target.value
        })
    }
    submitHandler = (event) => {
        alert(`username: ${this.state.name} and email : ${this.state.email}`);
        event.preventDefault();
    }
    render(){
        return(
            <div>
                <h2>Basic Form</h2>
                <form onSubmit={this.submitHandler}>
                    Username : <input type = "text" value = {this.state.name} onChange = {this.unameChangeHandler} />
                    <br/>
                     <br/>
                    Email : <input type = "text" value = {this.state.email} onChange = {this.emailChangeHandler} />
                    <button type = "submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default FormBasic;