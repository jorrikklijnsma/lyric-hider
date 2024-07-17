// components/FileUploader.js
import { replacementData } from "../data/replacementData";

export const FileUploader = ({ onFileUpload }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          onFileUpload(jsonData);
        } catch (error) {
          console.error('Error parsing JSON:', error);
          alert('Error loading JSON file. Please check the file format.');
        }
      };
      reader.readAsText(file);
    }
  };

  const handleDataReset = () => {
    onFileUpload(replacementData);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Upload JSON file</label>
      <input
        type="file"
        accept=".json"
        onChange={handleFileChange}
        className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
      />
      <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm" onClick={handleDataReset}
      >Reset to original set</button>
    </div>
  );
};
