import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

const donorActivityData = [
	{ name: "Mon", "0-4": 5, "4-8": 15, "8-12": 25, "12-16": 35, "16-20": 45, "20-24": 30 },
	{ name: "Tue", "0-4": 6, "4-8": 20, "8-12": 30, "12-16": 40, "16-20": 50, "20-24": 35 },
	{ name: "Wed", "0-4": 7, "4-8": 25, "8-12": 35, "12-16": 45, "16-20": 55, "20-24": 40 },
	{ name: "Thu", "0-4": 8, "4-8": 30, "8-12": 40, "12-16": 50, "16-20": 60, "20-24": 45 },
	{ name: "Fri", "0-4": 9, "4-8": 35, "8-12": 45, "12-16": 55, "16-20": 65, "20-24": 50 },
	{ name: "Sat", "0-4": 10, "4-8": 40, "8-12": 50, "12-16": 60, "16-20": 70, "20-24": 55 },
	{ name: "Sun", "0-4": 11, "4-8": 45, "8-12": 55, "12-16": 65, "16-20": 75, "20-24": 60 },
];

const DonorsActivityHeatmap = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>Donor Activity by Time of Day</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<BarChart data={donorActivityData} layout="horizontal">
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='name' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						<Bar dataKey='0-4' stackId='a' fill='#6366F1' />
						<Bar dataKey='4-8' stackId='a' fill='#8B5CF6' />
						<Bar dataKey='8-12' stackId='a' fill='#EC4899' />
						<Bar dataKey='12-16' stackId='a' fill='#10B981' />
						<Bar dataKey='16-20' stackId='a' fill='#F59E0B' />
						<Bar dataKey='20-24' stackId='a' fill='#3B82F6' />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default DonorsActivityHeatmap;
