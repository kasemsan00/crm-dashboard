import React from 'react';
import { FiBell, FiMenu, FiSearch } from 'react-icons/fi';
import { Button } from './ui/Button';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  toggleSidebar: () => void;
}

export function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="navbar bg-base-100 border-b border-base-300 px-4">
      <div className="flex-1">
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={toggleSidebar}
        >
          <FiMenu className="h-5 w-5" />
        </Button>
        <div className="relative ml-4 w-full max-w-md">
          <div className="relative">
            <FiSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-base-content/50" />
            <input
              type="search"
              placeholder="Search..."
              className="input input-bordered w-full pl-9 focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="flex-none gap-2">
        <ThemeToggle />
        <Button variant="ghost" size="sm" className="relative">
          <FiBell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-error text-xs text-white flex items-center justify-center">
            3
          </span>
        </Button>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <div className="bg-neutral text-neutral-content rounded-full w-10 h-10 flex items-center justify-center">
                <span>UN</span>
              </div>
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li><a>Profile</a></li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
