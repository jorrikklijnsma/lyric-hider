import React, { useState, useEffect } from 'react';

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

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Add/Update Replacement</h2>
      <form onSubmit={handleSubmit} className="mb-2">
        <div className="flex space-x-2">
          <input
            type="text"
            value={original}
            onChange={(e) => setOriginal(e.target.value)}
            placeholder="Original word"
            className="flex-1 border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border rounded-md"
          />
          <input
            type="text"
            value={replacement}
            onChange={(e) => setReplacement(e.target.value)}
            placeholder="Replacement word"
            className="flex-1 border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border rounded-md"
          />
          <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Add
          </button>
        </div>
      </form>
      {matchingItems.length > 0 && (
        <div>
          <h3 className="text-md font-semibold mb-2">Matching items in text:</h3>
          <ul className="list-disc list-inside mb-2">
            {matchingItems.map((item, index) => (
              <li key={index}>{item.original}: {item.replacement}</li>
            ))}
          </ul>
          <button
            onClick={handleBulkReplace}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Replace All Matches
          </button>
        </div>
      )}
    </div>
  );
};
