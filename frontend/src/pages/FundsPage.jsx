import { motion } from "framer-motion";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import FundAllocationChart from "../components/overview/FundAllocationChart";
import FundingTrendChart from "../components/funds/FundingTrendChart";
import FundsTable from "../components/funds/FundsTable";
import FundingOverviewChart from "../components/funds/FundsOverviewChart";

const FundsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Funds Overview' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total Funds' icon={Package} value={"$543,210"} color='#6366F1' />
					<StatCard name='Top Grant' icon={TrendingUp} value='Education Support' color='#10B981' />
					<StatCard name='Lowest Fund Balance' icon={AlertTriangle} value='Emergency Assistance' color='#F59E0B' />
					<StatCard name='Total Donations' icon={DollarSign} value={"$1,234,567"} color='#EF4444' />
				</motion.div>

				<div className='mt-8'>
					<FundingOverviewChart />
				</div>

				{/* CHARTS */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<FundingTrendChart />
					<FundAllocationChart />
				</div>

				<div className='mt-8'>
				<FundsTable />
				</div>
			</main>
		</div>
	);
};

export default FundsPage;
