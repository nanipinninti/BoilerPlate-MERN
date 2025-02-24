import React,{useState} from "react";
import { useTheme } from '../../contexts/Theme/ThemeContext';

// Icons
interface NotificationProps{
    closePopup:()=>void;
}

const NotificationList  = [
    {
        message : "Hi you are doing well",
        link : "#",
        time : "Date&time format",
        read : false

    }
]
const NotificationComponent:React.FC<NotificationProps>= ({closePopup})=>{
    const {theme} = useTheme() // dark light
    return(
        <div>
            THisi is notification component
        </div>
    )
}
export default NotificationComponent;