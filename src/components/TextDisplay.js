// components/TextDisplay.js
export const TextDisplay = ({ processedText, onToggleReplacement }) => {
  return (
    <div className="mt-4 p-4 border border-gray-300 rounded-lg min-h-[200px] whitespace-pre-wrap">
      {processedText.map((item) => {
        if ('original' in item) {
          return (
            <button
              key={item.id}
              onClick={() => onToggleReplacement(item.id)}
              className={`cursor-pointer ${item.isReplaced ? 'bg-pink-300' : 'bg-violet-300'}`}
            >
              {item.isReplaced ? item.replacement : item.original}
            </button>
          );
        }
        return <span key={item.id}>{item.text}</span>;
      })}
    </div>
  );
};