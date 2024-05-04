import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker'; // Import DatePicker
import 'react-datepicker/dist/react-datepicker.css'; // Import DatePicker styles
import { useParams } from 'react-router-dom';


function RentFormModal({ onClose}) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [totalDays, setTotalDays] = useState(0);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your form submission logic here
      console.log({
        name,
        address,
        startDate,
        endDate,
        phoneNumber
      });
      onClose();
    };
  
    const calculateTotalDays = (start, end) => {
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      const diffDays = Math.round(Math.abs((end - start) / oneDay));
      setTotalDays(diffDays);
    };
  
    const handleStartDateChange = (date) => {
      setStartDate(date);
      calculateTotalDays(date, endDate);
    };
  
    const handleEndDateChange = (date) => {
      setEndDate(date);
      calculateTotalDays(startDate, date);
    };
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-semibold mb-4">Rent Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
            </div>
            <div className="mb-4">
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
              <DatePicker selected={startDate} onChange={handleStartDateChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
            </div>
            <div className="mb-4">
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
              <DatePicker selected={endDate} onChange={handleEndDateChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
            </div>
            <div className="mb-4">
              <label htmlFor="totalDays" className="block text-sm font-medium text-gray-700">Total Days</label>
              <input type="text" id="totalDays" value={totalDays} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50" readOnly />
            </div>
            <div className="mb-4">
              <label htmlFor="totalPrice" className="block text-sm font-medium text-gray-700">Total Cost For {totalDays} Days</label>
              <input type="text" id="totalDays" value={`You have to pay Rs ${totalDays*303}`} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50" readOnly />
            </div>
            <div className="mt-4 flex justify-end">
              <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md">Add To Cart</button>
              <button onClick={onClose} className="ml-2 px-4 py-2 bg-gray-600 text-white rounded-md">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
}
function Rent() {
  const { productId } = useParams();

  useEffect(()=>{
    
  },[])

console.log(productId);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <>
            <section className="bg-gray-800 text-gray-100">
                <div className="container max-w-xl p-6 py-8 mx-auto space-y-20 lg:px-8 lg:max-w-7xl">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-gray-50">Iphone 15 Pro Max</h2>
                    </div>
                    <div>
                        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                            <div className="lg:col-start-2">
                                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-50">Product Details</h3>
                                <div className="mt-12 space-y-12">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 text-gray-50">Forged In Titanium</h4>
                                            <p className="mt-2 text-gray-400">iPhone 15 Pro Max has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 text-gray-50">Game Changing A17 Pro Chip</h4>
                                            <p className="mt-2 text-gray-400"> A Pro-class GPU makes mobile games feel so immersive, with rich environments and realistic characters. A17 Pro is also incredibly efficient and helps to deliver amazing all-day battery life.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                    <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 text-gray-50">Rental Cost :  <span className="mt-2 text-gray-400">Rs 500 per day</span></h4>
                                            <h4 className="text-lg mt-2 font-medium leading-6 text-gray-50">Security Deposit :  <span className="mt-2 text-gray-400">Rs 5000</span></h4>
                                            <h4 className="text-lg mt-2 font-medium leading-6 text-gray-50">Delivery Charges :  <span className="mt-2 text-gray-400">Rs 40</span></h4>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3 space-x-10 text-xs text-gray-400">
                                        <Link to="#" className="flex-1 p-3 font-semibold  tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 text-center" onClick={openModal}>
                                            Rent
                                        </Link>
                                        <button className="flex-1 p-3 font-semibold tracking-wide rounded-md bg-gray-700 text-white dark:bg-gray-600 dark:text-gray-50">
                                            Chat With Us
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                <img
                                    src="https://m.media-amazon.com/images/I/81vxWpPpgNL._SL1500_.jpg"
                                    alt=""
                                    className="mx-auto rounded-lg shadow-lg bg-gray-500"
                                    style={{ width: "450px", height: "auto" }} // Adjust the width and height as needed
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {isModalOpen && <RentFormModal onClose={closeModal} />}
        </>
    )
}

export default Rent