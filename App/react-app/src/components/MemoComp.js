import React from 'react';

function MemoComp({name}){
    console.log("rendering memo component")
    return(
        <div>
           Memo used {name} 
        </div>
    )
}

export default React.memo(MemoComp);