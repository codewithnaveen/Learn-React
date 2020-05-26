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