import React,{ useState } from "react";
import {LoginComponent} from "./signin";
import {SignupComponent} from "./signup";

interface AuthComponentProps{
  MODE : string;
}
const AuthComponent:React.FC<AuthComponentProps> = ({MODE})=>{
  const [mode,setMode]  = useState<string>((MODE)?MODE:"signin") 

  const toggleMode = ()=>{
    setMode(mode === 'signin' ? 'signup' : 'signin')
  }

  return(
    <>      
      {(mode==="signup")&&<SignupComponent toggleMode={toggleMode} />}
      {(mode==="signin")&&<LoginComponent toggleMode={toggleMode} />}
    </>

    )
}
export default AuthComponent