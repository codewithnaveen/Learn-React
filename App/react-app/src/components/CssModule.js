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