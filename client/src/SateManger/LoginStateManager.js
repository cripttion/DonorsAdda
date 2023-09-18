import React,{createContext,useContext,useState} from 'react';
const loginStateManager = createContext();
export const LoginStateManager=({children})=> {
    const[loginState,setLoginSate] = useState(false);
    const[loginRole,setLoginRole] = useState("");
    const[userData,setUserData] = useState([{}]);
  return (
        <loginStateManager.Provider 
          value={{loginState,loginRole,setLoginSate,setLoginRole,userData,setUserData}}>
            {children}
          </loginStateManager.Provider>
    )
}

export const useLoginManager =()=>useContext(loginStateManager);