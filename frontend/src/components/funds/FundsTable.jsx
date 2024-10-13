import { motion } from "framer-motion";
import { useState } from "react";
import { Edit, Search, Trash2 } from "lucide-react";

const FUND_DATA = [
	{ id: 1, name: "Child Welfare", category: "Health", balance: "$15,000", allocation: "$20,000" },
	{ id: 2, name: "Education Support", category: "Education", balance: "$12,000", allocation: "$15,000" },
	{ id: 3, name: "Health Initiatives", category: "Health", balance: "$10,000", allocation: "$15,000" },
	{ id: 4, name: "Emergency Assistance", category: "Relief", balance: "$9,000", allocation: "$20,000" },
	{ id: 5, name: "Community Engagement", category: "Community", balance: "$7,500", allocation: "$10,000" },
];

const FundsTable = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredFunds, setFilteredFunds] = useState(FUND_DATA);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = FUND_DATA.filter(
			(fund) => fund.name.toLowerCase().includes(term) || fund.category.toLowerCase().includes(term)
		);

		setFilteredFunds(filtered);
	};

	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Funds Overview</h2>
				<div className='relative'>
					<input
						type='text'
						placeholder='Search funds...'
						className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
						onChange={handleSearch}
						value={searchTerm}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-700'>
					<thead>
						<tr>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Name
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Category
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Balance
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Allocation
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Actions
							</th>
						</tr>
					</thead>

					<tbody className='divide-y divide-gray-700'>
						{filteredFunds.map((fund) => (
							<motion.tr
								key={fund.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
									{fund.name}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									{fund.category}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									{fund.balance}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									{fund.allocation}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<button className='text-indigo-400 hover:text-indigo-300 mr-2'>
										<Edit size={18} />
									</button>
									<button className='text-red-400 hover:text-red-300'>
										<Trash2 size={18} />
									</button>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};

export default FundsTable;
