import React from 'react';
const Buttonx = ({name, children,}) => {
    return (
        <li>
        <button href={children}>{name}</button>
        </li>
    )
}
export default Buttonx;