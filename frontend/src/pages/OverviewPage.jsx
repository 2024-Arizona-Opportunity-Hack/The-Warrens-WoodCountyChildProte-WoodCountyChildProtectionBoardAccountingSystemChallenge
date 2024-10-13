import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";

import GrantTrackingChart from "../components/overview/GrantTrackingChart";
import DonationChannelChart from "../components/overview/DonationChannelChart";
import FundAllocationChart from "../components/overview/FundAllocationChart";

const OverviewPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Overview' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total Donations' icon={Zap} value='$45,000' color='#6366F1' />
					<StatCard name='Active Donors' icon={Users} value='245' color='#8B5CF6' />
					<StatCard name='Grants Received' icon={ShoppingBag} value='$120,000' color='#EC4899' />
					<StatCard name='Fund Utilization' icon={BarChart2} value='75%' color='#10B981' />
				</motion.div>
				{/* CHARTS */}

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<FundAllocationChart/>
					<DonationChannelChart />
					<GrantTrackingChart/>
				</div>
			</main>
		</div>
	);
};
export default OverviewPage;
