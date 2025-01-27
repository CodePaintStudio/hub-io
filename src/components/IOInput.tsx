import { useState } from "react";

function IOInput() {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  function handleClick(): void {
    setInputValue("");
  }

  return (
    <div className="w-full py-2.5 flex items-center justify-center gap-8">
      {/* Input */}
      <div className="relative w-2/5 pl-4 bg-transparent border border-white rounded-xl">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          type="text"
          placeholder={isFocused ? "e.g. https://github.com/goplus/gop" : ""}
          className="w-full h-12 bg-transparent outline-none text-white"
        />
        <div
          onClick={() => setIsFocused(!isFocused)}
          className={`select-none duration-300 text-white text-xl absolute top-0 left-4 p-2 rounded-xl ${
            isFocused
              ? "-translate-y-1/2 -translate-x-1/4 scale-50 bg-gradient-to-r from-slate-500 to-purple-500"
              : "bg-transparent"
          }`}
        >
          Enter a repository url here..
        </div>
      </div>
      {/* SearchButton */}
      <button
        onClick={handleClick}
        disabled={!inputValue}
        className="duration-300 h-12 px-6 rounded-xl bg-gradient-to-r from-slate-300 to-purple-300 hover:bg-gradient-to-r hover:from-slate-500 hover:to-purple-500 transition-colors active:translate-y-1 active:scale-95 focus:ring-2 focus:ring-offset-2 font-bold text-xl active:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Search
      </button>
    </div>
  );
}

export default IOInput;
