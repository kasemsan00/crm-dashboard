import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiUsers, FiPhoneCall, FiDollarSign, FiSettings } from 'react-icons/fi';
import { cn } from '@/lib/utils';

type NavItem = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <FiHome className="w-5 h-5" />,
  },
  {
    title: 'Customers',
    href: '/customers',
    icon: <FiUsers className="w-5 h-5" />,
  },
  {
    title: 'Leads',
    href: '/leads',
    icon: <FiPhoneCall className="w-5 h-5" />,
  },
  {
    title: 'Deals',
    href: '/deals',
    icon: <FiDollarSign className="w-5 h-5" />,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: <FiSettings className="w-5 h-5" />,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="drawer-side z-40">
      <label htmlFor="sidebar-drawer" className="drawer-overlay"></label>
      <aside className="bg-base-200 w-64 h-screen">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-base-300">
            <h1 className="text-xl font-bold">CRM System</h1>
          </div>
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="menu menu-md gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 rounded-lg px-3 py-2',
                      pathname === item.href
                        ? 'bg-primary text-primary-content'
                        : 'hover:bg-base-300 transition-colors'
                    )}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-4 border-t border-base-300">
            <div className="flex items-center gap-3">
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-8">
                  <span className="text-xs">US</span>
                </div>
              </div>
              <div>
                <p className="font-medium">User Name</p>
                <p className="text-sm text-base-content/70">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
