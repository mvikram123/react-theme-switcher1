import React,{children, useState} from "react";
import ColorContext from "./ColorContext";

 const morning={
    color:"black",
    background:"white",
    border:"1px solid tomato",
    align:"left"
 }

const ColorProvider=({children})=>{
    let[theme,setTheme]=useState(morning)



    return(

        <ColorContext.Provider value={{
            theme:theme,
            morning:()=>setTheme({...morning}),
            twilight:()=>setTheme({
                ...theme,
                color:"navy",
                background:"orange",
                border:"1px solid blue",
                align:"center"

            }),


            night:()=>setTheme({
                ...theme,
                color:"white",
                background:"black",
                border:"1px solid red",
                align:"right"

            })

            }}>
                 {children}
        </ColorContext.Provider>
       

        
    )
}


export default ColorProvider;