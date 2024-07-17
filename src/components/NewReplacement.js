// components/NewReplacement.js
import { useState } from 'react';

export const NewReplacement = ({ onAddReplacement }) => {
  const [original, setOriginal] = useState('');
  const [replacement, setReplacement] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (original && replacement) {
      onAddReplacement(original, replacement);
      setOriginal('');
      setReplacement('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Add New Replacement</h2>
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
  );
};
