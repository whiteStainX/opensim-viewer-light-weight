
import React, { useState, useRef } from 'react';
import { FaFileUpload, FaTimesCircle } from 'react-icons/fa';

const DropFile = () => {
  const [files, setFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef(null);

  const acceptedTypes = ['.osim', '.trc', '.mot', '.c3d', '.osimz', '.gltf'];

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    validateAndSetFiles(droppedFiles);
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    validateAndSetFiles(selectedFiles);
  };

  const validateAndSetFiles = (files) => {
    const filteredFiles = files.filter(file => {
      const fileExtension = `.${file.name.split('.').pop()}`;
      return acceptedTypes.includes(fileExtension.toLowerCase());
    });

    if (filteredFiles.length < files.length) {
      setErrorMessage(`Unsupported file types. Please select files with the following extensions: ${acceptedTypes.join(', ')}`);
    } else {
      setErrorMessage('');
      setFiles(filteredFiles);
    }
  };

  const openFileSelector = () => {
    fileInputRef.current.click();
  };

  const removeFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  return (
    <div
      className="border-2 border-dashed border-gray-400 rounded-lg p-8 text-center cursor-pointer hover:border-gray-600"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={openFileSelector}
    >
      <input
        type="file"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileChange}
        multiple
        accept={acceptedTypes.join(', ')}
      />
      {files.length === 0 ? (
        <div>
          <FaFileUpload className="text-5xl text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Drag and drop files here, or click to select files.</p>
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-medium mb-2">Selected Files:</h3>
          <ul>
            {files.map((file, index) => (
              <li key={index} className="flex justify-between items-center bg-gray-100 rounded-md p-2 mb-2">
                <span>{file.name}</span>
                <button onClick={() => removeFile(index)} className="text-red-500 hover:text-red-700">
                  <FaTimesCircle />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {errorMessage && (
        <p className="text-red-500 mt-4">{errorMessage}</p>
      )}
    </div>
  );
};

export default DropFile;
