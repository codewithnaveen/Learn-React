## Pure Component

React.PureComponent is similar to React.Component. The difference between them is that React.Component doesn’t implement shouldComponentUpdate(), but React.PureComponent implements it with a shallow prop and state comparison.

If your React component’s render() function renders the same result given the same props and state, you can use React.PureComponent for a performance boost in some cases.

***ParentComp.js***
```
import React from 'react';
import PureComp from '../components/PureComp';
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
            <PureComp name = {this.state.name} />
            </div>
        )
    }
}
export default ParentComp;
```
***RegComp.js***
```
import React from 'react';

class RegComp extends React.Component{
    render() {
        console.log("Regular Component")
        return( <div>
                Regular component {this.props.name}
         </div>
        )
    }
}
export default RegComp;
```
***PureComp***
```
import React from 'react';

class PureComp extends React.PureComponent{
    render() {
        console.log("Pure Component")
       return( <div>
               Pure Component {this.props.name}
        </div>
       )
    }
}
export default PureComp;
```
