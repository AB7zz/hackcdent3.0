import React, { useState } from 'react';

function Submit() {
  const [_loc, setLoc] = useState('')
  const [_time, setTime] = useState('')
  const [_date, setDate] = useState('')
  const [_plate, setPlate] = useState('')
  const [_snapShot, setImage] = useState(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async(e) => {
    try {
      e.preventDefault();
      const result = await axios.post('http://172.18.100.166:3000/userAddsAccident', {_loc, _time, _date, _plate, _snapShot})
      if(result){
        console.log('userAddsAccident successful')
      }
      // Handle form submission with selectedFile and other form data.
    } catch (error) {
      console.log(error)
    }
  };

  return (
    
    <div className='mt-10 mb-10' style={{ width: '529px', marginTop: '122px', marginLeft: '-205px' }}>
      <h1 className='font-bold text-xl'>Submit Accident</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="Location" className="block mb-2 text-sm font-medium text-gray-900">Location *</label>
          <input
            onChange={e => setLoc(e.target.value)}
            type="text"
            id="location"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="Time" className="block mb-2 text-sm font-medium text-gray-900">Time *</label>
          <input
            onChange={e => setTime(e.target.value)}
            type="time"
            id="time"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="Time" className="block mb-2 text-sm font-medium text-gray-900">Date *</label>
          <input
            onChange={e => setDate(e.target.value)}
            type="date"
            id="date"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="Time" className="block mb-2 text-sm font-medium text-gray-900">Plate No.</label>
          <input
            onChange={e => setPlate(e.target.value)}
            type="text"
            id="plate"
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
