## Introduction
Learn how to include React Bootstrap and Css in your project


## Installation
```
npm install react-bootstrap bootstrap
```
## Importing Components
```
import Button from 'react-bootstrap/Button';

// or less ideally
import { Button } from 'react-bootstrap';
```


 **Add this to index.html**

```
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
  crossorigin="anonymous"
/>
```
For Example : 


***BootstrapDemo.js***
```
import React from 'react';
import {Button} from 'react-bootstrap';
 function BootstrapDemo(){
     return(
        <div>
            <Button>Bootstrap button</Button>
        </div>
     )
 }
 export default BootstrapDemo;
 ```
---
## Css

### Regular Stylesheet

***myStyle.css***
```
.primary {
    color: orange;
}
```

***StyleSheet.js***
```
import React from 'react';
import './myStyle.css';

function Stylesheet(){
    return(
        <div>
            <h1 className = 'primary'>Stylesheets</h1>
        </div>
    )
}
export default Stylesheet;
```


### Inline css

In react inline css are not specified as a string. Instaed of this, it specified with in object whose key is camelcased version of the style proprtyname and the value is usual string.

***Inline.js***
```
import React from 'react';

function Inline(){
    const heading = {
        fontSize: '72px',
        color: 'red'
    }
   return(
       <div>
            <h1 style ={heading}>Inline</h1>
       </div>
   )
}

export default Inline; 
```


### Css modules

First thing the file name must be suffix of filename.module.css

And the imported class was locally scoped means the style will not applied to children compomnent.

After importing for using we need import attribute.classname

***appStyle.module.css***
```
.success {
    color: green;
}
```
***CssModule***
```
import React from 'react';
import appStyle from '../../src/appStyle.module.css';
function CssModule(){
    return(
        <div>
            <h1 className = {appStyle.success}>CSS Module style</h1>
        </div>
    )
}
export default CssModule;
```

