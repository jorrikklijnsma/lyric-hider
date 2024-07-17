// components/LanguageSelector.js
import React from 'react';
import { Globe } from 'lucide-react';

export const LanguageSelector = ({ languages, currentLanguage, onLanguageChange }) => {
  return (
    <div className="flex items-center space-x-2 p-2">
      <Globe size={20} />
      <select
        value={currentLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
        className="block w-full pl-3 pr-10 py-2 text-base text-white bg-blue-500 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md cursor-pointer"
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang.charAt(0).toUpperCase() + lang.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};