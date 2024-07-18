import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';

export const NewReplacement = ({ onAddReplacement, processedText, onBulkReplace }) => {
  const [original, setOriginal] = useState('');
  const [replacement, setReplacement] = useState('');
  const [matchingItems, setMatchingItems] = useState([]);

  useEffect(() => {
    if (original) {
      const matches = processedText.filter(item => 
        'original' in item && item.original.toLowerCase().includes(original.toLowerCase())
      );
      setMatchingItems(matches);
    } else {
      setMatchingItems([]);
    }
  }, [original, processedText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (original && replacement) {
      onAddReplacement(original, replacement);
      setOriginal('');
      setReplacement('');
    }
  };

  const handleBulkReplace = () => {
    if (original && replacement) {
      onBulkReplace(original, replacement);
      setOriginal('');
      setReplacement('');
    }
  };

  const setItemChange = (item) => () => {
    setOriginal(item.original);
    setReplacement(item.replacement);
  }

return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="flex space-x-2">
          <input
            type="text"
            value={original}
            onChange={(e) => setOriginal(e.target.value)}
            placeholder="Original word"
            className="flex-1 border-gray-300 focus:ring-violet-600 focus:border-violet-600 block w-full shadow-sm sm:text-sm border rounded-md px-4"
          />
          <input
            type="text"
            value={replacement}
            onChange={(e) => setReplacement(e.target.value)}
            placeholder="Replacement word"
            className="flex-1 border-gray-300 focus:ring-violet-600 focus:border-violet-600 block w-full shadow-sm sm:text-sm border rounded-md px-4"
          />
        </div>
        <button type="submit" className="w-full bg-violet-600 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center">
          <Plus size={20} className="mr-2" />
          <span>Add Replacement</span>
        </button>
      </form>
      {matchingItems.length > 0 && (
        <div>
          <h3 className="text-md font-semibold mb-2">Matching items in text:</h3>
          <ul className="list-none flex flex-col items-start mb-2">
            {matchingItems.map((item, index) => (
              <li key={index} className="py-2 px-4 border-b-2 border-blue-300 hover:bg-blue-100">
                <button className="cursor-pointer" onClick={setItemChange(item)}>{item.original} : {item.replacement}</button>
              </li>
            ))}
          </ul>
          <button
            onClick={handleBulkReplace}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-violet-700 hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-600"
          >
            Replace All Matches
          </button>
        </div>
      )}
    </div>
  );
};
