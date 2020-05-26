import React from 'react';
import FRInput from '../components/FRInput';

class FRParent extends React.Component{

    constructor(props){
        super(props);

        this.myRef = React.createRef();
    }

    clickHandler = () => {
        this.myRef.current.focus();
    }
    render(){
        return(
            <div>
                <FRInput ref = {this.myRef}/>
                <button onClick = {this.clickHandler}> Focus Input</button>
            </div>
        )
    }
} 

export default FRParent;