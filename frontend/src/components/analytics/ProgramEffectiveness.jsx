import { motion } from "framer-motion";
import {
	ResponsiveContainer,
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Tooltip,
	Legend,
} from "recharts";

const programData = [
	{ program: "Child Welfare", impact: 85, funding: 90, satisfaction: 80 },
	{ program: "Education Support", impact: 75, funding: 85, satisfaction: 88 },
	{ program: "Health Initiatives", impact: 65, funding: 78, satisfaction: 70 },
	{ program: "Emergency Assistance", impact: 90, funding: 92, satisfaction: 85 },
	{ program: "Community Engagement", impact: 80, funding: 76, satisfaction: 75 },
];

const ProgramEffectiveness = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>Program Effectiveness</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<RadarChart cx='50%' cy='50%' outerRadius='80%' data={programData}>
						<PolarGrid stroke='#374151' />
						<PolarAngleAxis dataKey='program' stroke='#9CA3AF' />
						<PolarRadiusAxis angle={30} domain={[0, 100]} stroke='#9CA3AF' />
						<Radar name='Impact' dataKey='impact' stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.4} />
						<Radar name='Funding' dataKey='funding' stroke='#10B981' fill='#10B981' fillOpacity={0.4} />
						<Radar name='Satisfaction' dataKey='satisfaction' stroke='#F59E0B' fill='#F59E0B' fillOpacity={0.4} />
						<Legend />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
					</RadarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default ProgramEffectiveness;
