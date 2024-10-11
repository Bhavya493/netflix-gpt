import React from "react";
import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const language = useSelector((state) => state.language.ln);

  return (
    <div className="flex justify-center pt-4">
      <form className="w-1/3 bg-black grid grid-cols-12 p-2">
        <input
          type="text"
          className="border border-black col-span-9"
          placeholder={lang[language]?.gptSearchPlaceholder}
        />
        <button className="p-2 bg-red-600 text-white col-span-3">
          {lang[language]?.search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
