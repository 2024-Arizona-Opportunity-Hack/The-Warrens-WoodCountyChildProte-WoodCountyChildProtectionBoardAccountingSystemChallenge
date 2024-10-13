import Header from "../components/common/Header";
import OverviewCards from "../components/analytics/OverviewCards";
import FundingChart from "../components/analytics/FundingChart";
import ExpenseDistribution from "../components/analytics/ExpenseDistribution";
import DonorEngagement from "../components/analytics/DonorEngagement";
import ProgramEffectiveness from "../components/analytics/ProgramEffectiveness";
import AIPoweredInsights from "../components/analytics/AIPoweredInsights";
import DonorActivityHeatmap from "../components/analytics/DonorsActivityHeatmap";

const ReportsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
			<Header title={"Reports Dashboard"} />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<OverviewCards />
				<FundingChart />

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<ExpenseDistribution />
					<DonorEngagement />
					<ProgramEffectiveness />
					<DonorActivityHeatmap />
				</div>

				<AIPoweredInsights />
			</main>
		</div>
	);
};
export default ReportsPage;
