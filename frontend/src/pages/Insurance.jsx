import React from 'react';

function Insurance() {
  return (
    <div className='mt-10 mb-10' style={{ width: '529px', marginTop: '122px', marginLeft:'-205px' }}>
      <form>
        <div className="mb-6">
          <label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900 ">Name *</label>
          <input type="name" id="name" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="mb-6">
          <label htmlFor="Phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone *</label>
          <input type="phoneno" id="phoneno" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="mb-6">
          <label htmlFor="Block Hash" className="block mb-2 text-sm font-medium text-gray-900 ">Block Hash</label>
          <input type="blockhash" id="blockhash" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  );
}

export default Insurance;
