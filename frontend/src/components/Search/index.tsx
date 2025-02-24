import React,{useState} from "react"

// Context
import { useTheme } from "../../contexts/Theme/ThemeContext"
// Icons
import { CiSearch } from "react-icons/ci"
import { IoMdClose } from "react-icons/io";

interface SearchPopupProps{
    closePopup:()=>void;
}
const SearchComponent:React.FC<SearchPopupProps> = ({closePopup})=>{
    const {theme} = useTheme()
    const [query,setQuery] = useState<string>("")
    return(
        <div className="w-full h-full shadow rounded">
            {/* top */}
            <div className="flex items-center justify-between px-2">
                {/* Search icon */}
                <div className="w-1/20">
                    <CiSearch
                    className={`text-lg ${
                    theme === "light" ? "text-[#101828]" : "text-gray-200"
                    }`}
                    />
                </div>
                
                {/* Query */}
                <input type="text" value={query}
                    className="w-18/20 p-2 outline-none"
                    onChange={e=>setQuery(e.target.value)}
                    placeholder="What are you looking for?"
                />

                {/* Close */}
                <div className="w-1/20 cursor-pointer" onClick={()=>closePopup()}>
                    <IoMdClose />
                </div>
            </div>
        </div>
    )
}
export default SearchComponent