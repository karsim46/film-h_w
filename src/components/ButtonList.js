import React from "react";
import Buttonx from "./Buttonx";
const ButtonList = ({buttonx}) => {
    const buttonxNodes = buttonx.map(button =>{
        return (
            <Buttonx name={buttonx.name}key={buttonx.id}>{buttonx.url}</Buttonx>
        );
    });
    return (
        <ul>
      {buttonxNodes}
        </ul>
    )
}
export default ButtonList;