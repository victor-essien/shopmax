import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaBoxOpen, FaClipboardList, FaChartBar, FaBell, FaStar, FaUser, FaQuestionCircle, FaBars, FaTimes, FaHome } from 'react-icons/fa';

const menuItems = [
  { label: 'Home ', icon: <FaHome />, link: '/seller/dashboard' },
  { label: 'Product ', icon: <FaBoxOpen />, link: '/seller/dashboard/products' },
  { label: 'Inventory', icon: <FaClipboardList />, link: '/seller/inventory' },
  { label: 'Analytics', icon: <FaChartBar />, link: '/seller/analytics' },
  { label: 'Notifications', icon: <FaBell />, link: '/seller/notifications' },
  { label: 'Ratings & Reviews', icon: <FaStar />, link: '/seller/reviews' },
  { label: 'Profile', icon: <FaUser />, link: '/seller/profile' },
  { label: 'Help Center', icon: <FaQuestionCircle />, link: '/seller/help' },
];

const SideBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded bg-white shadow border border-blue-100 text-blue-600 focus:outline-none"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
      >
        <FaBars className="w-6 h-6" />
      </button>
      {/* Overlay for mobile */}
      {open && (
        <div className="fixed inset-0 bg-black opacity-50 transition-opacity duration-300 z-40" onClick={() => setOpen(false)} />
      )}
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 border rounded-2xl h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:block`}
      >
        {/* Close button for mobile */}
        <div className="flex items-center justify-between p-4 md:hidden">
          <span className="text-slate-500 text-xl font-bold">Dashboard</span>
          <button onClick={() => setOpen(false)} className="text-slate-400 p-2 rounded hover:bg-blue-700 focus:outline-none">
            <FaTimes className="w-5 h-5" />
          </button>
        </div>
        {/* Logo/Title */}
        <div className="hidden md:flex items-center justify-center py-6">
          <span className="text-blue-400 text-2xl font-extrabold tracking-wide">ShopMax</span>
        </div>
        {/* Menu */}
        <nav className="mt-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.link;
              return (
                <li key={item.label}>
                  <a
                    href={item.link}
                    className={`flex items-center gap-3 px-6 py-3 text-base font-medium rounded-2xl transition
                      ${isActive ? 'bg-[#bbeaff] text-[#016d6d]' : 'text-slate-500 hover:bg-[#476c7c] hover:text-white'}
                    `}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
      {/* Spacer for desktop */}
      <div className="hidden md:block w-64 flex-shrink-0" />
    </div>
  );
};

export default SideBar;