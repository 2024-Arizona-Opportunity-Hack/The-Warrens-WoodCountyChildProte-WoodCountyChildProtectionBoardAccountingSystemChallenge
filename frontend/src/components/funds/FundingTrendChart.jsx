import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const fundData = [
	{ name: "Child Welfare", value: 15000 },
	{ name: "Education Support", value: 12000 },
	{ name: "Health Initiatives", value: 10000 },
	{ name: "Emergency Assistance", value: 9000 },
	{ name: "Community Engagement", value: 7500 },
];

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const FundingTrendChart = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 flex items-center justify-center'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			<div style={{ maxWidth: "600px", width: "100%" }}>
				<h2 className='text-xl font-semibold text-gray-100 mb-4 text-center'>Funding Allocation by Category</h2>
				<div className='h-80'>
					<ResponsiveContainer width="100%" height="100%">
						<BarChart
							layout="vertical"
							data={fundData}
							margin={{ top: 20, right: 20, left: 40, bottom: 20 }}
							barSize={20}
						>
							<CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
							<XAxis type="number" stroke="#9CA3AF" />
							<YAxis dataKey="name" type="category" stroke="#9CA3AF" width={150} />
							<Tooltip
								contentStyle={{
									backgroundColor: "rgba(31, 41, 55, 0.9)",
									borderColor: "#4B5563",
								}}
								itemStyle={{ color: "#E5E7EB" }}
							/>
							<Bar dataKey="value" fill="#8884d8" radius={[10, 10, 0, 0]}>
								{fundData.map((entry, index) => (
									<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
								))}
							</Bar>
						</BarChart>
					</ResponsiveContainer>
				</div>
			</div>
		</motion.div>
	);
};

export default FundingTrendChart;
