// components/LanguageSelector.js
export const LanguageSelector = ({ languages, currentLanguage, onLanguageChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="language-select" className="block text-sm font-medium text-gray-700">Select Language</label>
      <select
        id="language-select"
        value={currentLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
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
