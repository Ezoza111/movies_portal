import React from "react";
import { MyButton } from "../button/MyButton"

export const ExitAccaunt = ({changeLoginStatus}) => {
    const clickHundler = () => {
        changeLoginStatus(true)
    }
    return (
         <MyButton name={'Exit'} functionClick={clickHundler}/>
    )
}