import { CheckCircle, Clock, DollarSign, Package } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import DailyExpenses from "../components/expenses/DailyExpenses";
import ExpenseDistribution from "../components/expenses/ExpenseDistribution";
import ExpensesTable from "../components/expenses/ExpensesTable";

const expenseStats = {
	totalExpenses: "234",
	pendingApprovals: "12",
	approvedExpenses: "222",
	totalExpenseAmount: "$98,765",
};

const ExpensesPage = () => {
	return (
		<div className='flex-1 relative z-10 overflow-auto'>
			<Header title={"Program Expenses"} />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total Expense Requests' icon={Package} value={expenseStats.totalExpenses} color='#6366F1' />
					<StatCard name='Pending Approvals' icon={Clock} value={expenseStats.pendingApprovals} color='#F59E0B' />
					<StatCard
						name='Approved Expenses'
						icon={CheckCircle}
						value={expenseStats.approvedExpenses}
						color='#10B981'
					/>
					<StatCard name='Total Expenditures' icon={DollarSign} value={expenseStats.totalExpenseAmount} color='#EF4444' />
				</motion.div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<DailyExpenses />
					<ExpenseDistribution />
				</div>

				<ExpensesTable />
			</main>
		</div>
	);
};
export default ExpensesPage;
