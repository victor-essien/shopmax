import React from 'react';
import SideBar from '../../../components/SideBar';
// import { FaArrowUp, FaArrowDown, FaBoxOpen, FaMoneyBillWave, FaClipboardList } from 'react-icons/fa';
import DashboardCharts from '../../../components/DashboardCharts';
// const stats = [
// 	{
// 		label: 'Total Sales',
// 		value: '₦1,250,000',
// 		icon: <FaMoneyBillWave className="text-green-500" />,
// 		change: '+8%',
// 		trend: 'up',
// 	},
// 	{
// 		label: 'Orders',
// 		value: '320',
// 		icon: <FaClipboardList className="text-blue-500" />,
// 		change: '-2%',
// 		trend: 'down',
// 	},
// 	{
// 		label: 'Earnings',
// 		value: '₦850,000',
// 		icon: <FaMoneyBillWave className="text-yellow-500" />,
// 		change: '+5%',
// 		trend: 'up',
// 	},
// 	{
// 		label: 'Products',
// 		value: '48',
// 		icon: <FaBoxOpen className="text-purple-500" />,
// 		change: '+1%',
// 		trend: 'up',
// 	},
// ];

const DashboardHome: React.FC = () => {
	return (
		<div className="min-h-screen bg-white flex">
			<SideBar />
            
			<main className="flex-1   p-4 md:p-8">
            <DashboardCharts />
			</main>
		</div>
	);
};

export default DashboardHome;