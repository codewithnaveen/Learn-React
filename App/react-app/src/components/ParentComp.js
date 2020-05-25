import React from 'react';
import MemoComp from '../components/MemoComp';
import RegComp from '../components/RegComp';

class ParentComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Naveen'
        }
    }
    componentDidMount(){
        setInterval(()=>{this.setState({
            name:'Naveen'
        })},20000)
    }
    render() {
        console.log('****ParentComponent****');
        return(
            <div>
            <h4>Pure components</h4>
            <RegComp name = {this.state.name}/>
            <MemoComp name = {this.state.name} />
            </div>
        )
    }
}
export default ParentComp;