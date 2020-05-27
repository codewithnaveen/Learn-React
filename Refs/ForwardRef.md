### ForwardRef

Here the Ref is forwared to the native input element

Parent Component - ***FRParent.js***

```javascript
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

export default FRParent
```

Child Component - ***FRInput.js***
```
import React from 'react';

// function FRInput(){
//     return(
//         <div>
//             <input />
//         </div>
//     )
// }

const FRInput = React.forwardRef((props,ref) => {
    return(
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
})

export default FRInput;
```

