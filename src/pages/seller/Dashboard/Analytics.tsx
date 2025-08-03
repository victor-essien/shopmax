

// import React from 'react'

// const Analytics : React.FC = () => {
//   return (
//     <div>Analytics</div>
//   )
// }

// export default Analytics

// DashboardCharts.js
// import React from 'react';
// import EarningsChart from './charts/EarningsChart';
// import OrdersChart from './charts/OrdersChart';
// import SalesDistributionChart from './charts/SalesDistributionChart';
// import SalesVolumeChart from './charts/SalesVolumeChart';

// export default function DashboardCharts() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
//       <EarningsChart />
//       <OrdersChart />
//       <SalesDistributionChart />
//       <SalesVolumeChart />
//     </div>
//   );
// }

// // components/charts/EarningsChart.js
// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const earningsData = [
//   { month: 'Jan', earnings: 4000 },
//   { month: 'Feb', earnings: 3000 },
//   { month: 'Mar', earnings: 5000 },
//   { month: 'Apr', earnings: 4700 },
//   { month: 'May', earnings: 6000 },
// ];

// export default function EarningsChart() {
//   return (
//     <div className="bg-white p-4 rounded-2xl shadow-md">
//       <h2 className="text-lg font-semibold mb-2">Earnings Over Time</h2>
//       <ResponsiveContainer width="100%" height={250}>
//         <LineChart data={earningsData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="month" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="earnings" stroke="#3b82f6" strokeWidth={2} />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// // components/charts/OrdersChart.js
// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const ordersData = [
//   { product: 'Phone', orders: 240 },
//   { product: 'Laptop', orders: 130 },
//   { product: 'Charger', orders: 280 },
//   { product: 'Cable', orders: 190 },
// ];

// export default function OrdersChart() {
//   return (
//     <div className="bg-white p-4 rounded-2xl shadow-md">
//       <h2 className="text-lg font-semibold mb-2">Orders per Product</h2>
//       <ResponsiveContainer width="100%" height={250}>
//         <BarChart data={ordersData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="product" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="orders" fill="#f59e0b" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// // components/charts/SalesDistributionChart.js
// import React from 'react';
// import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

// const salesDistribution = [
//   { category: 'Electronics', value: 400 },
//   { category: 'Clothing', value: 300 },
//   { category: 'Accessories', value: 300 },
// ];

// const COLORS = ['#3b82f6', '#f59e0b', '#10b981'];

// export default function SalesDistributionChart() {
//   return (
//     <div className="bg-white p-4 rounded-2xl shadow-md">
//       <h2 className="text-lg font-semibold mb-2">Sales Distribution</h2>
//       <ResponsiveContainer width="100%" height={250}>
//         <PieChart>
//           <Pie data={salesDistribution} dataKey="value" nameKey="category" cx="50%" cy="50%" outerRadius={80} label>
//             {salesDistribution.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//           <Tooltip />
//           <Legend />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// // components/charts/SalesVolumeChart.js
// import React from 'react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const salesVolume = [
//   { month: 'Jan', volume: 2400 },
//   { month: 'Feb', volume: 2210 },
//   { month: 'Mar', volume: 2290 },
//   { month: 'Apr', volume: 2000 },
//   { month: 'May', volume: 2181 },
// ];

// export default function SalesVolumeChart() {
//   return (
//     <div className="bg-white p-4 rounded-2xl shadow-md">
//       <h2 className="text-lg font-semibold mb-2">Sales Volume</h2>
//       <ResponsiveContainer width="100%" height={250}>
//         <AreaChart data={salesVolume}>
//           <defs>
//             <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
//               <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
//             </linearGradient>
//           </defs>
//           <XAxis dataKey="month" />
//           <YAxis />
//           <CartesianGrid strokeDasharray="3 3" />
//           <Tooltip />
//           <Area type="monotone" dataKey="volume" stroke="#10b981" fillOpacity={1} fill="url(#colorVolume)" />
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }
