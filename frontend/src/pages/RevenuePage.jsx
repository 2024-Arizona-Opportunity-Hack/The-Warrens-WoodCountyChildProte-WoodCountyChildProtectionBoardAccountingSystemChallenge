import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import SalesOverviewChart from "../components/revenue/SalesOverviewChart";
import SalesByCategoryChart from "../components/revenue/SalesByCategoryChart";
import DailySalesTrend from "../components/revenue/DailySalesTrend";

const revenueStats = {
	totalRevenue: "$1,234,567",
	averageDonationValue: "$78.90",
	donationGrowthRate: "3.45%",
	fundGrowth: "12.3%",
};

const RevenuePage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Revenue Dashboard' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* REVENUE STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total Revenue' icon={DollarSign} value={revenueStats.totalRevenue} color='#6366F1' />
					<StatCard
						name='Avg. Donation Value'
						icon={ShoppingCart}
						value={revenueStats.averageDonationValue}
						color='#10B981'
					/>
					<StatCard
						name='Donation Growth Rate'
						icon={TrendingUp}
						value={revenueStats.donationGrowthRate}
						color='#F59E0B'
					/>
					<StatCard name='Fund Growth' icon={CreditCard} value={revenueStats.fundGrowth} color='#EF4444' />
				</motion.div>

				<SalesOverviewChart />

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<SalesByCategoryChart />
					<DailySalesTrend />
				</div>
			</main>
		</div>
	);
};
export default RevenuePage;
