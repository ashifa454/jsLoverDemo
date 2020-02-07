import React from 'react';
import './style.scss';
function Container({ theme, children }) {
    console.log(theme);
    return <div className="itemContainer" style={{ color: theme?.fg,backgroundColor: theme?.bg }}>{children}</div>
}
export default Container;