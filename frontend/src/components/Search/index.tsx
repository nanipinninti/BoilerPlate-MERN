import React, { useState } from "react";

// Context
import { useTheme } from "../../contexts/Theme/ThemeContext";

// Icons
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { VscHistory } from "react-icons/vsc";
import { CiShoppingCart } from "react-icons/ci";

interface SearchPopupProps {
  closePopup: () => void;
}

const RecentSearches = [
  {
    id: 1,
    query: "Who is the best cricketer in the world?",
  },
  {
    id: 2,
    query: "Who is the best cricketer in the world?",
  },
  {
    id: 3,
    query: "Who is the best cricketer in the world?",
  },
];

const Suggestions = [
  {
    id: 1,
    suggestion: "Who is the best cricketer in the world?",
  },
  {
    id: 2,
    suggestion: "Who is the best cricketer in the world?",
  },
  {
    id: 3,
    suggestion: "Who is the best cricketer in the world?",
  },
];

const SearchComponent: React.FC<SearchPopupProps> = ({ closePopup }) => {
  const { theme } = useTheme();
  const [query, setQuery] = useState<string>("");

  const  RecentSearchClick = ()=>{
        alert("Recent Search Clicked")
    }

    const suggestionClick = ()=>{
        alert("Suggestion Clicked")
    }

    const removePastQuery = ()=>{
        alert("Remove Past Query Clicked")
    }

  return (
    <div
      className={`w-full h-full shadow-lg text-[15px] sm:rounded-lg pb-4 overflow-y-auto sm:max-h-[600px] ${
        theme === "light" ? "bg-white" : "bg-gray-900"
      }`}
    >
      {/* Top Section */}
      <div className="flex items-center justify-between px-2">
        {/* Search Icon */}
        <div className="w-1/20">
          <CiSearch
            className={`text-lg ${
              theme === "light" ? "text-[#101828]" : "text-gray-200"
            }`}
          />
        </div>

        {/* Query Input */}
        <input
          type="text"
          value={query}
          className={`w-18/20 p-2 py-3 outline-none ${
            theme === "light" ? "bg-white text-[#101828]" : "bg-gray-900 text-gray-200"
          }`}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What are you looking for?"
        />

        {/* Close Icon */}
        <div
          className="w-1/20 cursor-pointer"
          onClick={() => closePopup()}
        >
          <IoMdClose
            className={`text-lg ${
              theme === "light" ? "text-[#101828]" : "text-gray-200"
            }`}
          />
        </div>
      </div>

      <hr
        className={`border ${
          theme === "light" ? "border-gray-200" : "border-gray-700"
        }`}
      />

      {/* Suggestions */}
      {query && Suggestions.length > 0 &&(
        <div className="mt-2">
          <p
            className={`font-semibold px-3 ${
              theme === "light" ? "text-[#101828]" : "text-gray-200"
            }`}
          >
            Suggestions
          </p>
          <div className="mt-2">
            {Suggestions.map((suggestion) => (
              <div
                key={suggestion.id}
                className={`p-2 px-3 rounded mt-1  flex items-start gap-2 cursor-pointer ${
                  theme === "light" ? "hover:bg-gray-100" : "hover:bg-gray-800"
                }`}
                
                onClick={suggestionClick}
              >
                <div className="text-[16px] mt-[4px]">
                  <CiSearch
                    className={theme === "light" ? "text-[#101828]" : "text-gray-200"}
                  />
                </div>

                <p
                  className={`w-9/10 pt-0 ${
                    theme === "light" ? "text-[#101828]" : "text-gray-200"
                  }`}
                >
                  {suggestion.suggestion}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Searches */}
      {!query && RecentSearches.length > 0 ? (
        <div className="mt-2">
          <p
            className={`font-semibold px-3 ${
              theme === "light" ? "text-[#101828]" : "text-gray-200"
            }`}
          >
            Recent Searches
          </p>
          <div className="mt-2">
            {RecentSearches.map((search) => (
              <div
                key={search.id}
                className={`p-2 px-3 rounded mt-1 justify-between flex items-start gap-2 cursor-pointer ${
                  theme === "light" ? "hover:bg-gray-100" : "hover:bg-gray-800"
                }`}
                onClick={RecentSearchClick}
              >
                <div className="text-[16px] mt-[4px]">
                  <VscHistory
                    className={theme === "light" ? "text-[#101828]" : "text-gray-200"}
                  />
                </div>
                <p
                  className={`w-9/10 pt-0 ${
                    theme === "light" ? "text-[#101828]" : "text-gray-200"
                  }`}
                >
                  {search.query}
                </p>
                <a
                  className={`!text-blue-500 cursor-pointer text-[14px] ${
                    theme === "light" ? "text-blue-500" : "text-blue-400"
                  }`}
                  onClick={removePastQuery}
                >
                  Remove
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        !query && (
          <div className="my-5 px-3">
            <p
              className={theme === "light" ? "text-[#101828]" : "text-gray-200"}
            >
              Search for something (modify this statement)
            </p>
          </div>
        )
      )}

      {/* Features */}
      <div className="px-3">
        <p
          className={`font-semibold ${
            theme === "light" ? "text-[#101828]" : "text-gray-200"
          }`}
        >
          Features
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-2">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className={`flex items-center gap-2 cursor-pointer ${
                theme === "light" ? "text-[#101828]" : "text-gray-200"
              }`}
            >
              <div>
                <CiShoppingCart
                  className={theme === "light" ? "text-[#101828]" : "text-gray-200"}
                />
              </div>
              Cart
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;