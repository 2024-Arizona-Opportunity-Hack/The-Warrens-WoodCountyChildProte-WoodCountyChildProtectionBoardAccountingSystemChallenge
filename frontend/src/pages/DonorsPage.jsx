import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import UsersTable from "../components/donors/UsersTable";
import UserGrowthChart from "../components/donors/UserGrowthChart";
import UserActivityHeatmap from "../components/donors/UserActivityHeatmap";
import UserDemographicsChart from "../components/donors/UserDemographicsChart";

const donorStats = {
	totalDonors: 152845,
	newDonorsToday: 243,
	activeDonors: 98520,
	churnRate: "2.4%",
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
					<StatCard name='Churn Rate' icon={UserX} value={donorStats.churnRate} color='#EF4444' />
				</motion.div>

				<UsersTable />

				{/* DONOR CHARTS */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>
					<UserGrowthChart />
					<UserActivityHeatmap />
					<UserDemographicsChart />
				</div>
			</main>
		</div>
	);
};
export default DonorsPage;
