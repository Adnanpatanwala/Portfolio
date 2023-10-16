import React, { createContext, useEffect, useState } from 'react'
import { useContext } from 'react' 

const Appcontext = createContext();

export const  AppProvider = ({children})=>{ 
 

    return(
        <Appcontext.Provider value={{
            
        }} >
            {children}
        </Appcontext.Provider>
    )
}

export const UseGlobalContext = ()=>{
    return useContext(Appcontext);
}


