import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import DailyOrders from "../components/orders/DailyOrders";
import OrderDistribution from "../components/orders/OrderDistribution";
import OrdersTable from "../components/orders/OrdersTable";

const expenseStats = {
	totalExpenses: "1,234",
	pendingExpenses: "56",
	completedExpenses: "1,178",
	totalExpenseAmount: "$98,765",
};

const ExpensesPage = () => {
	return (
		<div className='flex-1 relative z-10 overflow-auto'>
			<Header title={"Expenses"} />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total Expenses' icon={ShoppingBag} value={expenseStats.totalExpenses} color='#6366F1' />
					<StatCard name='Pending Expenses' icon={Clock} value={expenseStats.pendingExpenses} color='#F59E0B' />
					<StatCard
						name='Completed Expenses'
						icon={CheckCircle}
						value={expenseStats.completedExpenses}
						color='#10B981'
					/>
					<StatCard name='Total Expense Amount' icon={DollarSign} value={expenseStats.totalExpenseAmount} color='#EF4444' />
				</motion.div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<DailyOrders />
					<OrderDistribution />
				</div>

				<OrdersTable />
			</main>
		</div>
	);
};
export default ExpensesPage;
