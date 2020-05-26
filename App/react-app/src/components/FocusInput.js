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