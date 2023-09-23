import React,{useState} from 'react';
import {useStateContext} from '../context/StateContext';
import emailjs from '@emailjs/browser';
import MailSent from '../components/Insurance/Mailsent';


function Insurance() {
  const [_phone, setPhone] = React.useState('')
  const [_name, setName] = React.useState('')
  const [_block, setBlock] = React.useState('')
  const [filledClaim,setFilledClaim] = useState(null)
  const [fir,setFir] = useState(null);
  const [policy,setPolicy] = useState(null)
  const [inemail,setInEmail]= useState('')
  const [inname,setInName] = useState('')
  const [mailsent,setMailSent] = useState(false)

  const {address} = useStateContext()
  emailjs.init('63EkXHr_zHJVHSj20')

  const handleSubmit = async(e) => {

    e.preventDefault();

    const formData = new FormData();
    formData.append('name', _name);
    formData.append('phone', _phone);
    formData.append('block', _block);
    formData.append('filledClaim', filledClaim);
    formData.append('policy', policy);
    formData.append('fir', fir);
    setMailSent(!mailsent)

    try {
      // const res = await axios.post('http://172.18.100.166:3000/reqInsurance', {_phone, _name, _block, _user: address})44
      const response = await fetch('http://172.18.100.166:3000/reqInsurance', {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
      await emailjs.send("service_j73s3ya","template_ilvk4ct",{
        message: formData,
        toEmail: inemail,
        },"63EkXHr_zHJVHSj20")
        .then((result) => {
          console.log(result);
          // setEmail("");
          // setMessage("");
          // alert('Claim email sent succesfully')
        }, (error) => {
          console.log(error);
        });
      alert('Email sent successfully to the insurance owner');
    } else {
      console.error('Error:', response.statusText);
    }
  } catch (error) {
    console.error('Error sending request:', error);
  }
  }
  return (
    <>
    {mailsent ? <MailSent/> : (
      <div className='mt-10 mb-10' style={{ width: '529px', marginTop: '122px' }}>
         <h1 className='font-bold text-xl'>Submit Insurance</h1>
        <form>
          <div className="mb-6">
            <label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900 ">Name *</label>
            <input onChange={(e) => setName(e.target.value)} type="name" id="name" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-6">
            <label htmlFor="Phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone *</label>
            <input onChange={(e) => setPhone(e.target.value)} type="phoneno" id="phoneno" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-6">
            <label htmlFor="Block Hash" className="block mb-2 text-sm font-medium text-gray-900 ">Block Hash</label>
            <input onChange={(e) => setBlock(e.target.value)} type="blockhash" id="blockhash" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-6">
            <label htmlFor="Name of insuance company" className="block mb-2 text-sm font-medium text-gray-900 ">Name of insuance company</label>
            <input onChange={(e) => setInName(e.target.value)} type="text" id="name" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-6">
            <label htmlFor="email of the insurance company" className="block mb-2 text-sm font-medium text-gray-900 ">Email of insuance company</label>
            <input onChange={(e) => setInEmail(e.target.value)} type="email" id="email" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-6">
            <label htmlFor="Filled claim with sign" className="block mb-2 text-sm font-medium text-gray-900 ">Filled Claim with Signature</label>
            <input onChange={(e) => setFilledClaim(e.target.files[0])} type="file" accept='.pdf' id="" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-6">
            <label htmlFor="Copy of your insurance policy" className="block mb-2 text-sm font-medium text-gray-900 ">Copy of your insurance policy</label>
            <input onChange={(e) => setPolicy(e.target.files[0])} type="file" accept='.pdf' id="" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-6">
            <label htmlFor="Copy of your police FIR" className="block mb-2 text-sm font-medium text-gray-900 ">Copy of your police FIR</label>
            <input onChange={(e) => setFir(e.target.files[0])} type="file" accept='.pdf' id="" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <button onClick={handleSubmit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full">Submit</button>
        </form>
      </div>)
    }
    </>
  );
}

export default Insurance;
