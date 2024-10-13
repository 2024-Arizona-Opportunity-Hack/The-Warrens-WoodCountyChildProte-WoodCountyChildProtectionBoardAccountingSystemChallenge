import { motion } from "framer-motion";
import { TrendingUp, Users, ShoppingBag, DollarSign, Eye } from "lucide-react";

const INSIGHTS = [
	{
		icon: DollarSign,
		color: "text-green-500",
		insight: "Program funding increased by 20% due to targeted donor engagement efforts.",
	},
	{
		icon: Users,
		color: "text-blue-500",
		insight: "Donor retention improved by 15% following the launch of a new community outreach program.",
	},
	{
		icon: ShoppingBag,
		color: "text-purple-500",
		insight: "Emergency Assistance Fund saw the highest increase in utilization this quarter.",
	},
	{
		icon: Eye,
		color: "text-yellow-500",
		insight: "Increasing transparency in expense reporting could improve donor trust and engagement by 7-10%.",
	},
];


const AIPoweredInsights = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 1.0 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>AI-Powered Insights</h2>
			<div className='space-y-4'>
				{INSIGHTS.map((item, index) => (
					<div key={index} className='flex items-center space-x-3'>
						<div className={`p-2 rounded-full ${item.color} bg-opacity-20`}>
							<item.icon className={`size-6 ${item.color}`} />
						</div>
						<p className='text-gray-300'>{item.insight}</p>
					</div>
				))}
			</div>
		</motion.div>
	);
};
export default AIPoweredInsights;
