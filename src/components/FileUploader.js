// components/FileUploader.js
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
    </div>
  );
};
