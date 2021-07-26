import React, {useState}from 'react';
import ButtonList from "../components/ButtonList";


const ButtonBox = () => {
    const [button, setButton] = useState(
        [{ id:1,
           name: "View here for upcoming releases",
           url: "https://www.imdb.com/calendar/?region=gb"
         }

        ]
        )
        return(
            <>
           <button onClick = {() => button(ButtonList)}>View here for upcoming releases</button>
            {/* <ButtonList button = {button}/>    */}
            {/* <button>View here for upcoming releases</button> */}
            </>
    
           );

}

export default ButtonBox;