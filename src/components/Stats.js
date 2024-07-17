
import React from 'react';
import { BarChart2 } from 'lucide-react';

export const Stats = ({ stats }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <div className="flex items-center space-x-2 mb-2">
        <BarChart2 size={20} />
        <h2 className="text-lg font-semibold">Statistics</h2>
      </div>
      <p>Replaceable words: {stats.total}</p>
      <p>Currently replaced: {stats.replaced}</p>
    </div>
  );
};