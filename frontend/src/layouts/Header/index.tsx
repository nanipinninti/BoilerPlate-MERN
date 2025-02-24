import { useEffect,useState } from "react";

// Popups
import { AuthPopup } from "./auth.popup";
import { SearchPopup } from "./search.popup";

// Context
import { useTheme } from "../../contexts/Theme/ThemeContext";

// Icons
import { CiSearch } from "react-icons/ci";
import { BsSlashSquare } from "react-icons/bs";
import { CiDark } from "react-icons/ci";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiSolidUserCircle } from "react-icons/bi";

// Assets
import Logo from "../../assets/react.svg";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [authenticated, setAuthenticated] = useState<boolean>(true);

  // States to manage Popups
  const [showAuthPopup,setShowAuthPopup] = useState<boolean>(false);
  const [authMode,setAuthMode] = useState<"signin"|"signup">("signin")  
  const [showSearchPopup,setShowSearchPopup] = useState<boolean>(true);

  // Handle key board presses
  const handleKeyPress = (e: KeyboardEvent) => {
    // console.log(e.key)
    if (e.key === "/") {
      setShowSearchPopup(true);
    }
    if  (e.key === "Escape"){
      setShowSearchPopup(false);
      setShowAuthPopup(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  

  return (
    <div
      className={`w-screen shadow text-[18px] ${
        theme === "light" ? "bg-white" : "bg-gray-900"
      }`}
      onKeyDown={(e:KeyboardEvent)=>handleKeyPress(e)}
    >
      <div className="max-w-8xl mx-auto py-3 px-5 sm:px-10 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-8 h-8">
            <img src={Logo} alt="logo" className="w-full h-full object-contain" />
          </div>
          <p
            className={`text-[16px] sm:block ${
              theme === "light" ? "text-[#101828]" : "text-gray-200"
            }`}
          >
            Nani Pinninti
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center between gap-[10px] sm:gap-[15px]">
          {/* Search Bar */}
          <div
            className={`cursor-pointer border rounded ${
              theme === "light"
                ? "border-[#D1D5DC]"
                : "border-gray-700 bg-gray-800"
            }`}
            onClick={() => setShowSearchPopup(true)}
          >
            <div className="hidden lg:block py-[4px] pl-[6px] pr-[80px]">
              <p
                className={`flex items-center text-[14px] gap-[4px] ${
                  theme === "light" ? "text-[#101828]" : "text-gray-200"
                }`}
              >
                <CiSearch className="text-[17px]" />
                <span className="mb-[1px]">Type &nbsp; / &nbsp; to search</span>
              </p>
            </div>
            <div className="p-1 lg:hidden">
              <CiSearch
                className={`text-lg ${
                  theme === "light" ? "text-[#101828]" : "text-gray-200"
                }`}
              />
            </div>
          </div>

          {/* Theme */}
          <div onClick={() => toggleTheme()}>
            {theme === "light" && (
              <div
                className={`text-[18px] sm:text-[22px] p-1 cursor-pointer border rounded ${
                  theme === "light"
                    ? "border-[#D1D5DC]"
                    : "border-gray-700"
                }`}
              >
                <CiDark />
              </div>
            )}
            {theme === "dark" && (
              <div
                className={`text-[18px] sm:text-[22px] p-1 cursor-pointer border rounded ${
                  theme === "light"
                    ? "border-[#D1D5DC]"
                    : "border-gray-700"
                }`}
              >
                <MdOutlineWbSunny className="text-white"/>
              </div>
            )}
          </div>

          {/* Sign in or Signup*/}
          {!authenticated &&
            <div className="flex items-center gap-2">
              <button 
                  onClick={()=>{setAuthMode("signin");setShowAuthPopup(!showAuthPopup);}}
                  className="!bg-transparent !text-[14px] !px-0 sm:!px-3">
                  Sign in
              </button>
              <button
              
              onClick={()=>{setAuthMode("signup");setShowAuthPopup(!showAuthPopup);}}
                className="!bg-transparent !text-[14px] hidden !px-3 sm:inline">
                  Sign up
              </button>
            </div>
          }

          {authenticated&&
            <>

            {/* Notification */}
            <div
            className={`cursor-pointer border rounded p-1 ${
              theme === "light"
                ? "border-[#D1D5DC]"
                : "border-gray-700 bg-gray-800"
            }`}
            >
                  <IoMdNotificationsOutline
                    className={`text-lg ${
                      theme === "light" ? "text-[#101828]" : "text-gray-200"
                    }`}
                  />
            </div>

            {/* Profile */}
            <div
            className={`cursor-pointer
            }`}
            >
                  <BiSolidUserCircle
                    className={`text-[28px] ${
                      theme === "light" ? "text-[#101828]" : "text-gray-200"
                    }`}
                  />
              </div>

              </>
          }
        </div>
      </div>

      {/* Popups */}
      {showAuthPopup&&<AuthPopup MODE={authMode} closePopup={()=>{setShowAuthPopup(false)}}/>}
      {showSearchPopup&&<SearchPopup closePopup={()=>{setShowSearchPopup(false)}}/>}
    </div>
  );
}