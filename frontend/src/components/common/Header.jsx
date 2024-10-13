import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title }) => {
	return (
		<header className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700'>
			<div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between'>
				{/* Left Side: Company Title and Page Title */}
				<div className='flex items-center space-x-4'>
					<h2 className='text-2xl font-semibold text-gray-100'>Accounting App</h2>
					<h1 className='text-2xl font-thin text-gray-100'>{title}</h1>
				</div>

				{/* Right Side: Navigation Buttons */}
				<div className='flex space-x-4'>
					<Link to="/fundAccounting" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-sm">
						Fund Accounting
					</Link>
					<Link to="/grantTracking" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-sm">
						Grant Tracking
					</Link>
					<Link to="/fileUpload" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-sm">
						Upload File
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;

