import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const donationData = [
	{ month: "Jan", "Online Donations": 4000, "In-person Events": 3000, "Mail Contributions": 2000, "Corporate Sponsorships": 3500, "Crowdfunding": 2800, "Text-to-Give": 1600, "Recurring Monthly": 1500, "Grants": 5000 },
	{ month: "Feb", "Online Donations": 4200, "In-person Events": 3100, "Mail Contributions": 2300, "Corporate Sponsorships": 3700, "Crowdfunding": 3000, "Text-to-Give": 1700, "Recurring Monthly": 1600, "Grants": 5100 },
	{ month: "Mar", "Online Donations": 4300, "In-person Events": 3200, "Mail Contributions": 2400, "Corporate Sponsorships": 3600, "Crowdfunding": 2900, "Text-to-Give": 1800, "Recurring Monthly": 1700, "Grants": 5200 },
	{ month: "Apr", "Online Donations": 4500, "In-person Events": 3300, "Mail Contributions": 2500, "Corporate Sponsorships": 3800, "Crowdfunding": 3100, "Text-to-Give": 1900, "Recurring Monthly": 1800, "Grants": 5300 },
	{ month: "May", "Online Donations": 4600, "In-person Events": 3400, "Mail Contributions": 2600, "Corporate Sponsorships": 3900, "Crowdfunding": 3200, "Text-to-Give": 2000, "Recurring Monthly": 1900, "Grants": 5400 },
	{ month: "Jun", "Online Donations": 4800, "In-person Events": 3500, "Mail Contributions": 2700, "Corporate Sponsorships": 4000, "Crowdfunding": 3300, "Text-to-Give": 2100, "Recurring Monthly": 2000, "Grants": 5500 },
];

const COLORS = ["#6366F1", "#10B981", "#F59E0B", "#8B5CF6", "#EC4899", "#EF4444", "#3B82F6", "#F97316"];

const DonationChannelChart = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Donations by Source Over Time</h2>

			<div className='h-80'>
				<ResponsiveContainer width="100%" height="100%">
					<LineChart data={donationData}>
						<CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
						<XAxis dataKey="month" stroke="#9CA3AF" />
						<YAxis stroke="#9CA3AF" />
						<Tooltip 
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />

						{Object.keys(donationData[0]).filter(key => key !== 'month').map((key, index) => (
							<Line 
								type="monotone" 
								dataKey={key} 
								stroke={COLORS[index % COLORS.length]} 
								strokeWidth={2} 
								dot={{ r: 3 }} 
								activeDot={{ r: 6 }} 
								key={key}
							/>
						))}
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default DonationChannelChart;
