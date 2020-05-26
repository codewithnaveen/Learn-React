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