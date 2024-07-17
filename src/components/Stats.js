
// components/Stats.js
export const Stats = ({ stats }) => {
  return (
    <div className="mb-4 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Statistics</h2>
      <p>Replaceable words: {stats.total}</p>
      <p>Currently replaced: {stats.replaced}</p>
    </div>
  );
};
