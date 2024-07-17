import React, { useState } from 'react';

export const SectionAnnotationDialog = ({ isOpen, onClose, onAddAnnotation }) => {
  const [annotationText, setAnnotationText] = useState('');
  const [sectionType, setSectionType] = useState('verse');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAnnotation(sectionType, annotationText);
    setAnnotationText('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Add Section Annotation</h3>
          <form onSubmit={handleSubmit} className="mt-2 px-7 py-3">
            <select
              value={sectionType}
              onChange={(e) => setSectionType(e.target.value)}
              className="mb-3 w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            >
              <option value="verse">Verse</option>
              <option value="chorus">Chorus</option>
              <option value="bridge">Bridge</option>
            </select>
            <textarea
              value={annotationText}
              onChange={(e) => setAnnotationText(e.target.value)}
              placeholder="Enter annotation text"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Add Annotation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};