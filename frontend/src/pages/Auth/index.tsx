import AuthComponent from "../../components/Authentication"

// Context
import { useTheme } from "../../contexts/Theme/ThemeContext"

const Auth = ()=>{
    const {theme} = useTheme()   
    return(
        <div className={`min-h-screen min-w-screen flex flex-col items-center justify-center ${(theme==="light")?
            "bg-#F9FAFB"
            : "bg-black"
        }`}>
            <div className="w-11/12 mx-auto max-w-[500px] rounded-lg">
                <AuthComponent />
            </div>
        </div>
    )
}
export default Auth