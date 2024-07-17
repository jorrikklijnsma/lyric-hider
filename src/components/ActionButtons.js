// components/ActionButtons.js
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
      <button onClick={onPaste} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Paste Text
      </button>
      <button onClick={onToggleAll} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Toggle All
      </button>
      {/* random toggle section */}
      <div className="flex gap-2 flex-col">
        {/*  label assosiated with control and the inputfield self */}
        <label className="block text-sm font-medium text-gray-700" htmlFor="randomToggleAmount">Amount for random Toggle</label>
        <input name="randomToggleAmount" type="number" min="1" step="1" className="border border-gray-300 rounded-md p-1" placeholder="Amount" onChange={handleToggleAmountChange}>
        </input>

        <button onClick={() => onToggleRandom(randomToggleAmount)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          Toggle Random {randomToggleAmount}
        </button>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleCopyToClipboard}>
        copy to clipboard
      </button>
    </div>
  );
};
