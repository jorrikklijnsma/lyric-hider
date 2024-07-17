// components/ActionButtons.js
import React from 'react';
import { ClipboardCopy, RefreshCw, Shuffle } from 'lucide-react';

import { useState } from 'react';

export const ActionButtons = ({ onPaste, onToggleAll, onToggleRandom, onCopyToClipboard }) => {
  // reactive variable for the random toggle amount
  const [randomToggleAmount, setRandomToggleAmount] = useState(5);

  const handleToggleAmountChange = (e) => {
    setRandomToggleAmount(e.target.value);
  }

  const handleCopyToClipboard = () => {
    onCopyToClipboard();
  }

  return (
    <div className="flex flex-wrap mb-4 gap-2">
      <button onClick={onPaste} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
        <ClipboardCopy size={20} className="mr-2" />
        <span>Paste</span>
      </button>
      <button onClick={onToggleAll} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
        <RefreshCw size={20} className="mr-2" />
        <span>Toggle All</span>
      </button>
      {/* random toggle section */}
      <div className="flex gap-2 flex-col inline-flex items-center">
        {/*  label assosiated with control and the inputfield self */}
        <label className="block text-sm font-medium text-gray-700" htmlFor="randomToggleAmount">Amount for random Toggle</label>
        <input name="randomToggleAmount" type="number" min="1" step="1" className="border border-gray-300 rounded-md p-1 px-4" placeholder="Amount" onChange={handleToggleAmountChange}>
        </input>

      </div>
        <button onClick={() => onToggleRandom(randomToggleAmount)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <Shuffle size={20} className="mr-2" />
          <span>Random ({randomToggleAmount})</span>
        </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center" onClick={handleCopyToClipboard}>
        <ClipboardCopy size={20} className="mr-2" />
        <span>Copy</span>
      </button>
    </div>
  );
};
