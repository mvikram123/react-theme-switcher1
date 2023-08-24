import React, { useContext,useState } from "react";
import ColorContext from "../context/ColorContext";



const Hello=()=>{

    let{theme,twilight,night,morning}=useContext(ColorContext)
    let[themeNumber,setThemeNumber]=useState(0)

    function switchTheme(){

        if(themeNumber===0){

            twilight()
            setThemeNumber(1)

        }
        else if(themeNumber===1){

            night()
            setThemeNumber(2)

        }

        else if(themeNumber===2){

            morning()
            setThemeNumber(0)

        }
    }





    return(
        <div>
       
         <div style={{
            color:theme.color,
            background:theme.background,
            border:theme.border,
            textAlign:theme.align

        }}>
                <h1>Ram is dancing</h1>
                <p>Ram is a nice person</p>
            </div>

            {/* <button onClick={morning}>Turn to morning</button>
            <button onClick={twilight}>Turn to twilight</button>
            <button onClick={night}>Turn to night</button> */}

            <button onClick={switchTheme}>
                {
                    themeNumber===0? "Turn to Twilight":
                    themeNumber===1? "Turn to night " : " Trun to morning"
                }
            </button>
        </div>
    )
}
export default Hello;