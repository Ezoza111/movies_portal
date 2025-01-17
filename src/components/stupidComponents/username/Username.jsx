import React from "react";
import { MyButton } from "../button/MyButton"


export const Username = (props) => {
    const clickHundler = () => {
        console.log('click Exit btn')
        //localStorage.removeItem('user')
       // props.changeLoginStatus();
    }
    return (
        <>
         {props.userArray}
         <MyButton name={'Exit'} functionClick={clickHundler}/>
        </>
    )
}