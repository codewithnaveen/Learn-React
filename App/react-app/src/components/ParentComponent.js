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
