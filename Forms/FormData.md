***FormNew.js***
```
import React from 'react';

class FormNew extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message:'',
            isSubmiited: false
        }
    }

    changeHandler = (event) => {
        let target = event.target;
        console.log(target.id);

        let newstate = {};
        newstate[target.id] = target.value;
        this.setState(newstate);
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.setState({
            isSubmiited:true
        })
        console.log(this.state);
    }
    render(){
        return(
            <div>
                <h2>Basic Form</h2>
                 <form onSubmit={this.submitHandler}>
                    Username : <input type = "text" id="name" value = {this.state.name} onChange = {this.changeHandler} />
                    <br/>
                    <br/>
                    Email : <input type = "text" id="email" value = {this.state.email} onChange = {this.changeHandler} />
                    <br/>
                    <br/>
                    Message : <input type = "text" id="message" value = {this.state.message} onChange = {this.changeHandler} />
                    <br/>
                    <br/>
                    <button type = "submit" disabled = {this.state.isSubmiited ? 'disabled' : ''}>Submit</button>
                </form>
            </div>
        )
    }
}
export default Form;
```
