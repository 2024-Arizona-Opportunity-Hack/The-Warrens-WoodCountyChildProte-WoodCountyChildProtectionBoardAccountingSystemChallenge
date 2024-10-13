import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/common/Sidebar";
import OverviewPage from "./pages/OverviewPage";
import FundsPage from "./pages/FundsPage";
import DonorsPage from "./pages/DonorsPage";
import RevenuePage from "./pages/RevenuePage";
import ExpensesPage from "./pages/ExpensesPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";
import CSVUploader from "./pages/CSVUploader";


function App() {
	return (
		<div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
			{/* BG */}
			<div className='fixed inset-0 z-0'>
				<div className='absolute inset-0  from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<div className='absolute inset-0' /> {/* Removed backdrop-blur-sm */}
			</div>

			<Sidebar />
			<Routes>
			<Route path='/' element={<OverviewPage />} />
			<Route path='/funds' element={<FundsPage />} />
			<Route path='/donors' element={<DonorsPage />} />
			<Route path='/revenue' element={<RevenuePage />} />
			<Route path='/expenses' element={<ExpensesPage />} />
			<Route path='/reports' element={<ReportsPage />} />
			<Route path='/settings' element={<SettingsPage />} />
			<Route path='/fileUpload' element={<CSVUploader />} /> {/* Add Route for CSVUploader */}
			</Routes>
		</div>
	);
}

export default App;
