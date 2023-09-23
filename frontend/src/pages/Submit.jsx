import React, { useState } from 'react';

function Submit() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with selectedFile and other form data.
  };

  return (
    
    <div className='mt-10 mb-10' style={{ width: '529px', marginTop: '122px', marginLeft: '-205px' }}>
      <h1 className='font-bold text-xl'>Submit Accident</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="Location" className="block mb-2 text-sm font-medium text-gray-900">Location *</label>
          <input
            type="text"
            id="location"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="Time" className="block mb-2 text-sm font-medium text-gray-900">Time *</label>
          <input
            type="text"
            id="time"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="Image" className="block mb-2 text-sm font-medium text-gray-900">Upload Image *</label>
          <input
            type="file"
            accept="image/*"
            id="image"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleFileChange}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Submit;
