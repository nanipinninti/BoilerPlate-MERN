import React from "react";

interface AuthButtonProps{
    mode : string;
}
export const AuthButton:React.RC<AuthButtonProps> = ({mode})=>{
    return(
        <div className="w-full  relative mb-2 bg-[#4F39F6] text-white p-2 text-center rounded-lg cursor-pointer">
            <h1 className="!text-sm m-auto font-semibold">
                {mode === "signin" ? "Sign In" : "Sign Up"}
            </h1>
            <p className="absolute top-[40px] text-red-500 text-xs"></p>
        </div>
    )
}