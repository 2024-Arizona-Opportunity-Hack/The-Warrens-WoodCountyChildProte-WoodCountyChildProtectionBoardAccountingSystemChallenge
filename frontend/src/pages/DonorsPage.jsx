import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import DonorsTable from "../components/donors/DonorsTable";
import DonersGrowthChart from "../components/donors/DonorsGrowthChart";
import DonorActivityHeatmap from "../components/donors/DonorsActivityHeatmap";
import DonorsDemographicsChart from "../components/donors/DonorsDemographicsChart";

const donorStats = {
	totalDonors: 152845,
	newDonorsToday: 243,
	activeDonors: 98520,
	retentionRate: "97.6%",  // Adjusted from churn rate for relevance
};

const DonorsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Donors' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard
						name='Total Donors'
						icon={UsersIcon}
						value={donorStats.totalDonors.toLocaleString()}
						color='#6366F1'
					/>
					<StatCard name='New Donors Today' icon={UserPlus} value={donorStats.newDonorsToday} color='#10B981' />
					<StatCard
						name='Active Donors'
						icon={UserCheck}
						value={donorStats.activeDonors.toLocaleString()}
						color='#F59E0B'
					/>
					<StatCard name='Retention Rate' icon={UserX} value={donorStats.retentionRate} color='#EF4444' />
				</motion.div>

				<DonorsTable />

				{/* DONOR CHARTS */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>
					<DonersGrowthChart />
					<DonorActivityHeatmap />
					<DonorsDemographicsChart />
				</div>
			</main>
		</div>
	);
};
export default DonorsPage;
