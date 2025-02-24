import React from "react"
import { motion } from "framer-motion";

// component
import SearchComponent from "../../components/Search";

interface SearchPopupProps{
    closePopup:()=>void;
}
export const SearchPopup:React.FC<SearchPopupProps> = ({closePopup})=>{
    return (
        <>
            {/* Background Overlay */}
            <div
                className="fixed top-0 left-0 w-screen h-screen backdrop-blur-sm z-10"
                onClick={()=>{closePopup()}} // Close popup when clicking on the overlay
            >
            </div>

            {/* Popup with Animation */}
            <motion.div
                initial={{ opacity: 0, y: -100 }} // Start position (from the top)
                animate={{ opacity: 1, y: 0 }}   // End position (center)
                exit={{ opacity: 0, y: -100 }}   // When closing (back to the top)
                transition={{ duration: 0.4, ease: "easeOut" }} 
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 mx-auto max-w-[500px] rounded-lg z-20 bg-white rounded"
                onClick={(e) => e.stopPropagation()} 
            >
                <SearchComponent closePopup={closePopup}/>
            </motion.div>
        </>
    );
}