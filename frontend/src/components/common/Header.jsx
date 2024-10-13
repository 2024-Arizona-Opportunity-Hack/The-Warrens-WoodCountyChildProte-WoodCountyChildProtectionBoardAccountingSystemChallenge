import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title }) => {
	return (
		<header className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700'>
			<div className='py-4 px-4 flex items-center justify-between'>
				{/* Left Side: Company Title and Page Title */}
				<div className='flex items-center space-x-4'>
					<h2 className='text-2xl font-semibold text-gray-100'>Accounting App</h2>
					<h1 className='text-2xl font-light'>|</h1>
					<h1 className='text-2xl font-thin text-gray-100'>{title}</h1>
				</div>

				{/* Right Side: Navigation Buttons */}
				<div className='flex space-x-4'>
					<Link to="/fundAccounting" className="px-4 py-2 bg-gray-900 border-gray-700 border text-white rounded-md shadow-xl transform transition-transform duration-300 hover:scale-105">
						Fund Accounting
					</Link>
					<Link to="/grantTracking" className="px-4 py-2 bg-gray-900 border-gray-700 border text-white rounded-md shadow-xl transform transition-transform duration-300 hover:scale-105">
						Grant Tracking
					</Link>
					<Link to="/fileUpload" className="px-4 py-2 bg-gray-900 border-gray-700 border text-white rounded-md shadow-xl transform transition-transform duration-300 hover:scale-105">
						Upload File
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
