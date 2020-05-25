### Memo

 If your function component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.

 ```
 import React from 'react';

function MemoComp({name}){
    console.log("rendering memo component");
    return(
        <div>
           Memo used {name} 
        </div>
    )
}

export default React.memo(MemoComp);
```
