// components/FileUploader.js
import { replacementData } from "../data/replacementData";
import { Upload, UndoDot } from 'lucide-react';

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
    <div className="flex items-center space-x-2">
      <label htmlFor="file-upload" className="cursor-pointer bg-violet-600 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded inline-flex items-center">
        <Upload size={20} className="mr-2" />
        <span>Upload JSON</span>
      </label>
      <input id="file-upload" type="file" accept=".json" onChange={handleFileChange} className="hidden" />
      <button className="cursor-pointer bg-violet-600 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded inline-flex items-center" onClick={handleDataReset}>
        <UndoDot size={20} className="mr-2" />
        Reset Lists
      </button>
    </div>
  );
};
